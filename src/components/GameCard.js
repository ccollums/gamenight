import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import propTypes from 'prop-types';
import '../css/GameCard.css';

const GameCard = ({ gameName, winner }) => {
  const { games } = useContext(GameContext)
  const playedGame = games.find(game => game.name === gameName)

  return(
    <section className="game-card">
      {playedGame && <img src={playedGame.img} alt={`${gameName} game box`} />}
      <p>{gameName }</p>
      <p className="game-card-winner">winner: {winner}</p>
    </section>
  )
}

export default GameCard;

GameCard.propTypes = { 
  gameName: propTypes.string.isRequired,
  winner: propTypes.string.isRequired,
}