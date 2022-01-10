import React, { useState, useEffect, createContext } from 'react'

const GameContext = createContext()

const GameProvider = (props) => {
  const [games, setGames] = useState([])
  const [gameNights, setGameNights] = useState(() => {
    const saved = localStorage.getItem("storedGameNights");
    const existingGameNights = JSON.parse(saved);
    return existingGameNights || []
  })
  const [winners, setWinners] = useState([])

  const fetchGames = async () => {
    try {
      const gameData = await fetch('https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=DSHOCsJGeA')
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
    } catch (e) {
        console.log(e.message)
    }
  }

  useEffect(() => {
    fetchGames()
  }, [])

  useEffect(() => {
    localStorage.setItem("storedGameNights", JSON.stringify(gameNights))
    setWinners(calculateStandings)
  }, [gameNights])


  const addGameNight = (newGameNight) => {
    setGameNights([...gameNights, newGameNight])
  }

  const addWinner = (newWinner) => {
    const currentGameNight = gameNights.find(gameNight => gameNight.id === newWinner.id)
    const otherGameNights = gameNights.filter(gameNight => gameNight.id !== newWinner.id)
    currentGameNight.gamesPlayed.push(newWinner)
    setGameNights([...otherGameNights, currentGameNight])
  }

  const calculateStandings = gameNights.map((gamenight) => {
    return gamenight.gamesPlayed
  }).flat().map((game => game.winner)).map(winner => winner.toLowerCase())

  const clearGameNights = () => {
    setGameNights([])
  }

  return (
      <GameContext.Provider value={{games, gameNights, winners, addGameNight, addWinner, clearGameNights}}>
        {props.children}
      </GameContext.Provider>
    )
}

export {GameContext, GameProvider}

