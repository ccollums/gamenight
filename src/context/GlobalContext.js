import React, { useState, useEffect, createContext } from 'react'

const GlobalContext = createContext()

const GlobalProvider = (props) => {
  const [games, setGames] = useState([])

  const fetchGames = async () => {
    try {
      const gameData = await fetch('https://api.boardgameatlas.com/api/search?limit=10&client_id=DSHOCsJGeA')
      const { games } = await gameData.json()
      setGames(games)
      console.log(games)
    } catch (e) {
        console.log(e.message)
    }
  }

useEffect(() => {
  fetchGames()
}, [])

return (
  <GlobalContext.Provider value={games}>
    {props.children}
  </GlobalContext.Provider>
)

}


export {GlobalContext, GlobalProvider}

