import '../css/App.css';
import GameNightForm from './GameNightForm';
import { Routes, Route } from 'react-router-dom'
import Standings from './Standings';
import Nav from './Nav';
import GameContainer from './GameContainer';
import Games from './Games'
import About from './About'
import { GlobalProvider } from '../context/GlobalContext';
import React from 'react';

const App = () => {
  return (
    <GlobalProvider>
      <div className="App">
        <Nav />
          <Routes>
            <Route path="/" element={
            <React.Fragment>
              <section className="form-standings">
                <GameNightForm />
                <Standings />
              </section>
                <GameContainer />
            </React.Fragment>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/games" element={<Games />}/>
          </Routes>
        </div>
    </GlobalProvider>
  );
}

export default App;
