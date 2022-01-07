import React from 'react';
import '../css/GameNight.css';
import GameResultsContainer from './GameResultsContainer';
import GamePlayForm from './GamePlayForm';


const GameNight = ({ date, location, players, id }) => {

  return(
    <section className="game-night">
      <div className="date-location">
        <p>{date}</p>
        <p>{location}</p>
      </div>
      <GameResultsContainer />
      <GamePlayForm players={players} id={id}/>
    </section>
  )
}

export default GameNight;
