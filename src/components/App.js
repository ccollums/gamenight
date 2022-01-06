import '../css/App.css';
import GameNightForm from './GameNightForm';
import Standings from './Standings';
import Nav from './Nav';
import GameContainer from './GameContainer';
import { GlobalProvider } from '../context/GlobalContext';

const App = () => {
  return (
    <GlobalProvider>
      <div className="App">
        <Nav />
        <section className="form-standings">
          <GameNightForm />
          <Standings />
        </section>
        <GameContainer />
      </div>
    </GlobalProvider>
  );
}

export default App;
