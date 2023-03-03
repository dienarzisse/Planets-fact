import './App.css';
import { useState, useEffect } from 'react';
import Data from './data.json';
// component imports
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import PlanetPage from './components/PlanetPage';

function App() {

  // States
  const [MenuIsOpen, setMenuIsOpen] = useState(false);
  const [PlanetIndex, setPlanetIndex] = useState(0);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <div className="App">
        <NavBar MenuIsOpen={ MenuIsOpen } setMenuIsOpen={ setMenuIsOpen } setPlanetIndex={ setPlanetIndex } windowSize={ windowSize }/>
        <Menu MenuIsOpen={ MenuIsOpen } setPlanetIndex={ setPlanetIndex } setMenuIsOpen={ setMenuIsOpen }/>
        <PlanetPage Data={ Data[PlanetIndex] }/>
    </div>
  );
}

export default App;
