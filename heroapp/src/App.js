import data from './data.json';
import HeroCard from './components/heroCard';
import './App.css';

//let heroes = JSON.parse(json);
let heroes = JSON.parse(JSON.stringify(data));
//let heroesContent = "";
//let hero;



function App() {
  return (
    <div className="App">
      {
        heroes.map((hero) =>
        <HeroCard name={hero.name}
        universe={hero.universe}
        occupation={hero.occupation}
        alterego={hero.alterego}
        friends={hero.friends}
        superpowers={hero.superpowers}
        url={hero.url}
        info={hero.info}
        >
        </HeroCard>
        )
      }
    </div>
  );
}



export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
