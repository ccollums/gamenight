import React from 'react';
import GameCard from './GameCard'
import '../css/GameResultsContainer.css';

const GameResultsContainer = ({ gamesPlayed }) => {
  const displayGamesPlayed = gamesPlayed.map((game, index) => <GameCard key={index} gameName={game.game} winner={game.winner} />)

  return (
    <React.Fragment>
      {!gamesPlayed.length ? <p className="empty-games-msg">Log a game and a winner!</p> :
        <section className="game-results-container">
          {displayGamesPlayed}
        </section>}
    </React.Fragment>
  )
}

export default GameResultsContainer;