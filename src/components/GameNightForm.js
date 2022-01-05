import React, { useState } from 'react';
import '../css/GameNightForm.css';

const GameNightForm = () => {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [players, setPlayers] = useState([]);


  return(
    <form>
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
      <button>Start Game Night!</button>
    </form>
  )
}

export default GameNightForm;