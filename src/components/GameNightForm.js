import React, { useState, useContext } from 'react';
import { GameContext } from '../context/GameContext';
import '../css/GameNightForm.css';

const GameNightForm = () => {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(false);
  const { addGameNight } = useContext(GameContext)

  const submitGameNight = e => {
    e.preventDefault();
      if (!date || !location || !players.length) {
      setError(true)
    } else {
      const newGameNight = {
        date, 
        location,
        players: players.split(','),
        id: Date.now(),
        gamesPlayed: []
      }
      addGameNight(newGameNight)
      clearInputs()
      setError(false)
    }
  }

  const clearInputs = () => {
    setDate('')
    setLocation('')
    setPlayers('')
  }

  return(
    <form className="game-night-form">
      <input
        type="text"
        name="date"
        placeholder="Date"
        value={date}
        onChange={e => setDate(e.target.value)}/>
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={location}
        onChange={e => setLocation(e.target.value)}/>
      <input
        type="text"
        name="players"
        placeholder="Players (separated by comma)"
        value={players}
        onChange={e => setPlayers(e.target.value)}/>
      <button onClick={e => submitGameNight(e)}>Start Game Night!</button>
      {error && <p>Please fill out all fields!</p>  }
    </form>
  )
}

export default GameNightForm;