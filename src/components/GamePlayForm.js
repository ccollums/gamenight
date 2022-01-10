import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import '../css/GamePlayForm.css';

const GamePlayForm = ({ players, id }) => {
  const [game, setGame] = useState('');
  const [winner, setWinner] = useState('');
  const { games, addWinner } = useContext(GlobalContext);

  const generateGamesDropdown = games.map((game) => {
    return <option key={game.id}>{game.name}</option>
  })

  const generatePlayersDropdown = players.map((player) => {
    return <option value={player}key={players.indexOf(player)}>{player}</option>
  })

  

  const submitWinner = e => {
    e.preventDefault()
    const gamePlayed = {
      id,
      game,
      winner
    }
    addWinner(gamePlayed)
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
        <option hidden>Game</option>
        {generateGamesDropdown}
      </select>
      <select
        name="winner"
        placeholder="Winner"
        value={winner}
        onChange={e => setWinner(e.target.value)}>
        <option hidden>Winner</option>
        {generatePlayersDropdown}
      </select>
      <button className="add-game-btn" onClick={e => submitWinner(e)}>Add Game</button>
    </form>
  )
}

export default GamePlayForm;