import React, { useState, useContext } from 'react';
import { GameContext } from '../context/GameContext';
import dayjs from 'dayjs';
import '../css/GameNightForm.css';

const GameNightForm = () => {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [location, setLocation] = useState('');
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(false);
  const { addGameNight } = useContext(GameContext);

  const submitGameNight = e => {
    e.preventDefault();
      if (!date || !location || !players.length) {
      setError(true)
    } else {
      const newGameNight = {
        date: dayjs(date).format('M/D/YYYY'),
        location,
        players: players.split(', '),
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
        type="date"
        max={dayjs().format('YYYY-MM-DD')}
        name="date"
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
        placeholder="Player Names (separated by comma)"
        value={players}
        onChange={e => setPlayers(e.target.value)}/>
      <button onClick={e => submitGameNight(e)}>Start Game Night!</button>
      {error ? <p>Please fill out all fields!</p> : <p style={{opacity: "0"}}>Error placeholder</p>}
    </form>
  )
}

export default GameNightForm;