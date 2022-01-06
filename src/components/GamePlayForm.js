import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import '../css/GamePlayForm.css';

const GamePlayForm = () => {
  const [game, setGame] = useState('');
  const [winner, setWinner] = useState('');
  const games = useContext(GlobalContext)

  const generateGamesDropdown = games.map((game) => {
    return <option key={game.id}>{game.name}</option>
  })

  return(
    <form className="game-play-form">
      <select
        name="game"
        placeholder="Game"
        onChange={e => setGame(e.target.value)}>
        <option hidden>Game</option>
        {generateGamesDropdown}
      </select>
      <select
        name="winner"
        placeholder="Winner"
        value={winner}
        onChange={e => setWinner(e.target.value)}>
      </select>
      <button>Add Game</button>
    </form>
  )
}

export default GamePlayForm;