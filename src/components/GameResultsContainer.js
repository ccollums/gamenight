import React from 'react';
import GameCard from './GameCard'
import '../css/GameResultsContainer.css';

const GameResultsContainer = ({ gamesPlayed }) => {
  const displayGamesPlayed = gamesPlayed.map((game, index) => {
    return <GameCard key={index} gameName={game.game} winner={game.winner}/>
  })

  return(
    <section className="game-results-container">
      {displayGamesPlayed}
    </section>
  )
}

export default GameResultsContainer;