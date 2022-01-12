import React, { useContext } from 'react';
import '../css/GameContainer.css';
import GameNight from './GameNight';
import { GameContext } from '../context/GameContext';
import ErrorPage from './ErrorPage';

const GameContainer = () => {
  const { gameNights, setGameNights, error } = useContext(GameContext)

  const sortedGameNights = gameNights.sort((a, b) => new Date(b.date) - new Date(a.date))

  const displayGameNights = !gameNights.length ? <p className="empty-container-msg">No game nights yet, start one above!</p> :
    sortedGameNights.map(gameNight => {
      return (
        <GameNight
          date={gameNight.date}
          location={gameNight.location}
          players={gameNight.players}
          id={gameNight.id}
          key={gameNight.id}
          gamesPlayed={gameNight.gamesPlayed}
        />
      )
    })

  return (
    <section className="game-container">
      {error ? <ErrorPage /> :
        <React.Fragment>
          <button className="clear-btn" onClick={() => setGameNights([])}>Clear</button>
          {displayGameNights}
        </React.Fragment>}
    </section>
  )
}

export default GameContainer;
