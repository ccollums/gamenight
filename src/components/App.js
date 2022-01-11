import React from 'react';
import '../css/App.css';
import GameNightForm from './GameNightForm';
import { Routes, Route } from 'react-router-dom'
import Standings from './Standings';
import Nav from './Nav';
import GameContainer from './GameContainer';
import Games from './Games'
import About from './About'
import { GameProvider } from '../context/GameContext';
import ErrorPage from './ErrorPage';

const App = () => {
  return (
    <GameProvider>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={
            <main>
              <section className="form-standings-section">
                <GameNightForm />
                <Standings />
              </section>
              <GameContainer />
            </main>} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/:invalidURL" element={<ErrorPage />} />
        </Routes>
      </div>
    </GameProvider>
  );
}

export default App;
