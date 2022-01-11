import React, { useState, useEffect, createContext } from 'react'

const GameContext = createContext()

const GameProvider = props => {
  const [error, setError] = useState(null)
  const [games, setGames] = useState([])
  const [winners, setWinners] = useState([])
  const [gameNights, setGameNights] = useState(() => {
    const saved = localStorage.getItem("storedGameNights");
    const existingGameNights = JSON.parse(saved);
    return existingGameNights || []
  })

  const fetchGames = async () => {
    try {
      const gameData = await fetch('https://api.boardgameatlas.com//search?order_by=rank&ascending=false&client_id=DSHOCsJGeA')
      const { games } = await gameData.json()
      setGames(games.map(game => {
        return {
          id: game.id,
          name: game.name,
          price: game.price,
          min_players: game.min_players,
          max_players: game.max_players,
          img: game.thumb_url,
          url: game.url
        }
      }).sort((a, b) => {
        return a.name.localeCompare(b.name)
      }))
    } catch (err) {
      setError(err)
    }
  }

  const addGameNight = newGameNight => setGameNights([...gameNights, newGameNight])

  const addWinner = newWinner => {
    const currentGameNight = gameNights.find(gameNight => gameNight.id === newWinner.id)
    const otherGameNights = gameNights.filter(gameNight => gameNight.id !== newWinner.id)
    currentGameNight.gamesPlayed.push(newWinner)
    setGameNights([...otherGameNights, currentGameNight])
  }

  const calculateStandings = gameNights.map((gamenight) => gamenight.gamesPlayed).flat().map((game => game.winner.toLowerCase()))

  useEffect(() => {
    fetchGames()
  }, [])

  useEffect(() => {
    localStorage.setItem("storedGameNights", JSON.stringify(gameNights))
    setWinners(calculateStandings)
  }, [gameNights])

  return (
    <GameContext.Provider value={{ error, games, gameNights, setGameNights, winners, addGameNight, addWinner }}>
      {props.children}
    </GameContext.Provider>
  )
}

export { GameContext, GameProvider }

