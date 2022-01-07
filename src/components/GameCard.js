import React from 'react';
import '../css/GameCard.css';

const GameCard = ({ game, winner }) => {
  return(
    <section className="game-card">
      <p>Game: {game}</p>
      <p>Winner: {winner}</p>
    </section>
  )
}

export default GameCard;