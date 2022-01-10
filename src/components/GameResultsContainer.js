import React from 'react';
import GameCard from './GameCard'
import '../css/GameResultsContainer.css';

const GameResultsContainer = ({ gamesPlayed }) => {
  const displayGamesPlayed = gamesPlayed.map((game, index) => {
    return <GameCard key={index} gameName={game.game} winner={game.winner}/>
  })

  return(
    <section className="game-results-container">
      {!gamesPlayed.length ? <p>Choose a game and tell us who won!</p> : displayGamesPlayed}
    </section>
  )
}

export default GameResultsContainer;