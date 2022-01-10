import React, { useContext } from 'react';
import '../css/GameContainer.css';
import GameNight from './GameNight';
import { GameContext } from '../context/GameContext';

const GameContainer = () => {
  const { gameNights, clearGameNights } = useContext(GameContext)

  console.log(gameNights)

  const displayGameNights = !gameNights.length ? <p>No game nights to display yet! Start one above!</p> :
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
      <button className="clear-btn" onClick={() => clearGameNights()}>Clear</button>
      {displayGameNights}
    </section>
  )
}

export default GameContainer;