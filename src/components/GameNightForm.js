import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import '../css/GameNightForm.css';

const GameNightForm = () => {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [players, setPlayers] = useState([]);
  const { addGameNight } = useContext(GlobalContext)

  const submitGameNight = (e) => {
    e.preventDefault();
    const newGameNight = {
      date, 
      location,
      players: players.split(','),
      id: Date.now()
    }
    addGameNight(newGameNight)
    clearInputs()
    console.log(newGameNight)
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
    </form>
  )
}

export default GameNightForm;