import React, { useState, useContext } from 'react';
import { GameContext } from '../context/GameContext';
import '../css/GamePlayForm.css';

const GamePlayForm = ({ players, id }) => {
  const [game, setGame] = useState('');
  const [winner, setWinner] = useState('');
  const [error, setError] = useState(false)
  const { games, addWinner } = useContext(GameContext);

  const generateGamesDropdown = games.map(game => <option key={game.id}>{game.name}</option>)

  const generatePlayersDropdown = players.map(player => <option value={player}key={players.indexOf(player)}>{player.toLowerCase()}</option>)

  const submitWinner = e => {
    e.preventDefault()
    if (!game || !winner) {
      setError(true)
    } else {
      const gamePlayed = {
        id,
        game,
        winner: winner.toLowerCase()
      }
      addWinner(gamePlayed)
      clearInputs();
      setError(false)
    }
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
      {error ? <p>Please select an option from all fields!</p> : <p style={{opacity: "0"}}>Error placeholder</p>}
    </form>
  )
}

export default GamePlayForm;