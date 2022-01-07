import React from 'react';
import '../css/GameResultsContainer.css';
import GameCard from './GameCard'

const GameResultsContainer = ({ gamesPlayed }) => {
  const displayGamesPlayed = gamesPlayed.map((game, index) => {
    return <GameCard key={index} gameName={game.game} winner={game.winner}/>
  })

  return(
    <section>
      {displayGamesPlayed}
    </section>
  )
}

export default GameResultsContainer;