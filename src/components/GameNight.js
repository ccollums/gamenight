import React from 'react';
import '../css/GameNight.css';
import GameResultsContainer from './GameResultsContainer';
import GamePlayForm from './GamePlayForm';

const GameNight = () => {
  return(
    <section className="game-night">
      <div className="date-location">
        <p>1/5/22</p>
        <p>Kyra's hotel</p>
      </div>
      <GameResultsContainer />
      <GamePlayForm />
    </section>
  )
}

export default GameNight;
