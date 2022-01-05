import React from 'react';
import '../css/GameNight.css';
import GameResultsContainer from './GameResultsContainer';
import GamePlayForm from './GamePlayForm';

const GameNight = () => {
  return(
    <section>
      <h2>1/5/22</h2>
      <h2>Kyra's hotel</h2>
      <GameResultsContainer />
      <GamePlayForm />
    </section>
  )
}

export default GameNight;
