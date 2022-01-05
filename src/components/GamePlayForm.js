import React, { useState } from 'react';
import '../css/GamePlayForm.css';

const GamePlayForm = () => {
  const [game, setGame] = useState('');
  const [winner, setWinner] = useState('');

  return(
    <form className="game-play-form">
      <input
        type="text"
        name="game"
        placeholder="Game"
        value={game}
        onChange={e => setGame(e.target.value)}/>
      <input
        type="text"
        name="winner"
        placeholder="Winner"
        value={winner}
        onChange={e => setWinner(e.target.value)}/>
      <button>Add Game</button>
    </form>
  )
}

export default GamePlayForm;