import React from 'react';
import '../css/GameResultsContainer.css';
import GameCard from './GameCard'

const GameResultsContainer = ({ gamesPlayed }) => {
  const displayGamesPlayed = gamesPlayed.map(game => {
    console.log(game, "game")
    return <GameCard game={game.game} winner={game.winner} />
  })

  return(
    <section>
      {displayGamesPlayed}
    </section>
  )
}

export default GameResultsContainer;