import React, { useContext } from 'react';
import '../css/GameContainer.css';
import GameNight from './GameNight';
import { GlobalContext } from '../context/GlobalContext';

const GameContainer = () => {
  const { gamenights } = useContext(GlobalContext)

  const displayGameNights = 
    gamenights.map((gamenight) => {
      return (
        <GameNight 
          date = {gamenight.date}
          location = {gamenight.location}
          players = {gamenight.players}
          id={gamenight.id}
          key = {gamenight.id}
          gamesPlayed={gamenight.gamesPlayed}
        />
      )
    })

  return(
    <section className="game-container">
      <button className="clear-button">Clear</button>
      {displayGameNights}
    </section>
  )
}

export default GameContainer;