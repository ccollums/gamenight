import '../css/App.css';
import GameNightForm from './GameNightForm';
import Standings from './Standings';
import Nav from './Nav';
import GameContainer from './GameContainer';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <section className="form-standings">
        <GameNightForm />
        <Standings />
      </section>
      <GameContainer />
    </div>
  );
}

export default App;
