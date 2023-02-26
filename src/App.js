import './App.css';
import { useState } from 'react';
import Data from './data.json';
// component imports
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import PlanetPage from './components/PlanetPage';

function App() {

  // States
  const [MenuIsOpen, setMenuIsOpen] = useState(false);
  const [PlanetIndex, setPlanetIndex] = useState(0);

  return (
    <div className="App">
        <NavBar MenuIsOpen={ MenuIsOpen } setMenuIsOpen={ setMenuIsOpen }/>
        <Menu MenuIsOpen={ MenuIsOpen } setPlanetIndex={ setPlanetIndex } setMenuIsOpen={ setMenuIsOpen }/>
        <PlanetPage Data={ Data[PlanetIndex] }/>
    </div>
  );
}

export default App;
