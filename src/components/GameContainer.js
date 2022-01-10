import React, { useContext } from 'react';
import '../css/GameContainer.css';
import GameNight from './GameNight';
import { GameContext } from '../context/GameContext';

const GameContainer = () => {
  const { gameNights } = useContext(GameContext)

  const displayGameNights = !gameNights.length ? <p>No game nights to display yet!  Start one above!</p> :
    gameNights.map((gameNight) => {
      return (
        <GameNight 
          date = {gameNight.date}
          location = {gameNight.location}
          players = {gameNight.players}
          id={gameNight.id}
          key = {gameNight.id}
          gamesPlayed={gameNight.gamesPlayed}
        />
      )
    })

  return(
    <section className="game-container">
      <button className="clear-btn">Clear</button>
      {displayGameNights}
    </section>
  )
}

export default GameContainer;