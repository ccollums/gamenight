import React, { useContext } from 'react';
import '../css/GameContainer.css';
import GameNight from './GameNight';
import { GlobalContext } from '../context/GlobalContext';

const GameContainer = () => {
  const { gamenights } = useContext(GlobalContext)
  console.log(gamenights, 'gamenights')

  const displayGameNights = 
    gamenights.map((gamenight) => {
      return (
        <GameNight 
          date = {gamenight.date}
          location = {gamenight.location}
          players = {gamenight.players}
          key = {gamenight.id}
        />
      )
    })


  return(
    <section className="game-container">
      {displayGameNights}
    </section>
  )
}

export default GameContainer;