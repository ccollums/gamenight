import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import '../css/GamePlayForm.css';

const GamePlayForm = ({ players, id }) => {
  const [game, setGame] = useState('');
  const [winner, setWinner] = useState('');
  const { games, gamenights } = useContext(GlobalContext);

  const generateGamesDropdown = games.map((game) => {
    return <option key={game.id}>{game.name}</option>
  })

  const generatePlayersDropdown = players.map((player) => {
    return <option key={players.indexOf(player)}>{player}</option>
  })

  const submitWinner = e => {
    e.preventDefault()
    const currentGameNight = gamenights.find(gamenight => gamenight.id === id)
    currentGameNight.gamesPlayed.push({
      game,
      winner
    })
    clearInputs();
  }

  const clearInputs = () => {
    setGame('')
    setWinner('')
  }

  return(
    <form className="game-play-form">
      <select
        name="game"
        placeholder="Game"
        value={game}
        onChange={e => setGame(e.target.value)}>
        <option hidden>Select Game</option>
        {generateGamesDropdown}
      </select>
      <select
        name="winner"
        placeholder="Winner"
        value={winner}
        onChange={e => setWinner(e.target.value)}>
        <option hidden>Select Winner</option>
        {generatePlayersDropdown}
      </select>
      <button onClick={e => submitWinner(e)}>Add Game</button>
    </form>
  )
}

export default GamePlayForm;