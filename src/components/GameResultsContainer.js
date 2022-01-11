import React from 'react';
import GameCard from './GameCard'
import '../css/GameResultsContainer.css';

const GameResultsContainer = ({ gamesPlayed }) => {
  const displayGamesPlayed = gamesPlayed.map((game, index) => <GameCard key={index} gameName={game.game} winner={game.winner}/>)

  return(
    <section className="game-results-container">
      {!gamesPlayed.length ? <p>Log a game and a winner at right!</p> : displayGamesPlayed}
    </section>
  )
}

export default GameResultsContainer;