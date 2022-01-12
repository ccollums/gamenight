import React from 'react';
import '../css/GameNight.css';
import GameResultsContainer from './GameResultsContainer';
import GamePlayForm from './GamePlayForm';
import propTypes from 'prop-types';

const GameNight = ({ date, location, players, id, gamesPlayed }) => {
  return(
    <section className="game-night">
      <div className="date-location">
        <p>{date}</p>
        <p>{location}</p>
      </div>
      <GameResultsContainer gamesPlayed={gamesPlayed} />
      <GamePlayForm players={players} id={id}/>
    </section>
  )
}

export default GameNight;

GameNight.propTypes = { 
  date: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  players: propTypes.array.isRequired,
  id: propTypes.number.isRequired,
  gamesPlayed: propTypes.array.isRequired
}
