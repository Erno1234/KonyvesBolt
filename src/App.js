import './App.css';
import Termek from './komponens/Termek';
import { termekek } from './komponens/Termekek';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  function kattintasKezelo(props){
    console.log(props);
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>WebAruhaz</h1>
      </header>
      <article>
        <div className="webaruhaz">
        <div className="row">
        {termekek.map((elem, index) => {
          return (<Termek key={index} konyvcim={elem.konyvcim} szerzo={elem.szerzo} ar={elem.ar} kattintasKezelo={kattintasKezelo}/>)
        })
        }    
        </div>   
        </div>
      </article>
      <footer>
        <p>Pálóci Ernő</p>
      </footer>
    </div>
  );
}

export default App;
