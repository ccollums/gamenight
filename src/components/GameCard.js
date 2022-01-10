import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import '../css/GameCard.css';

const GameCard = ({ gameName, winner }) => {
  const { games } = useContext(GlobalContext)
  const playedGame = games.find(game => game.name === gameName)

  return(
    <section className="game-card">
      {playedGame && <img src={playedGame.img} alt={`${gameName} game box`} />}
      <p>{gameName }</p>
      <p className="game-card-winner">Winner: {winner}</p>
    </section>
  )
}

export default GameCard;