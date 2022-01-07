import React, { useState, useEffect, createContext } from 'react'

const GlobalContext = createContext()

const GlobalProvider = (props) => {
  const [games, setGames] = useState([])
  const [gamenights, setGameNights] = useState(() => {
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
          img: game.thumb_url
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
    localStorage.setItem("storedGameNights", JSON.stringify(gamenights))
    setWinners(calculateStandings)
  }, [gamenights])


  const addGameNight = (newGameNight) => {
    setGameNights([...gamenights, newGameNight])
  }

  const addWinner = (newWinner) => {
    const currentGameNight = gamenights.find(gamenight => gamenight.id === newWinner.id)
    const otherGameNights = gamenights.filter(gamenight => gamenight.id !== newWinner.id)
    currentGameNight.gamesPlayed.push(newWinner)
    setGameNights([...otherGameNights, currentGameNight])
  }

  const calculateStandings = gamenights.map((gamenight) => {
    return gamenight.gamesPlayed
  }).flat().map((game => game.winner)).map(winner => winner.toLowerCase())


  return (
      <GlobalContext.Provider value={{games, gamenights, winners, addGameNight, addWinner}}>
        {props.children}
      </GlobalContext.Provider>
    )
}

export {GlobalContext, GlobalProvider}

