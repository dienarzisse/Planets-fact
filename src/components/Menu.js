import './styling/css/Menu.css';
import { useState, useEffect } from 'react';
import MenuPlanet from './MenuPlanet';

function Menu({MenuIsOpen, setMenuIsOpen, setPlanetIndex}){

    const [isOpen, setIsOpen] = useState(MenuIsOpen);

    useEffect( () => {
        setIsOpen(MenuIsOpen);
    }, [MenuIsOpen]); 

    // event handlers
    const handleClick = (event) => {
        const planet = event.target.getAttribute("data-value");
        let index = -1;
        switch(planet){
            case 'mearcury': index = 0; break;
            case 'venus': index = 1; break;
            case 'earth': index = 2; break;
            case 'mars': index = 3; break;
            case 'jupiter': index = 4; break;
            case 'saturn': index = 5; break;
            case 'uranus': index = 6; break;
            case 'neptune': index = 7; break;
            default: index = 0;
        }
        setPlanetIndex(index);
        setMenuIsOpen(false);
        
    }

    return(
        <div className={isOpen ? `Menu`:`MenuClosed`}>
            <MenuPlanet handleClick={ handleClick } Color={ `#DEF4FC` } PlanetName={ `mercury` }/>
            <MenuPlanet handleClick={ handleClick } Color={ `#F7CC7F` } PlanetName={ `venus` }/>
            <MenuPlanet handleClick={ handleClick } Color={ `#545BFE` } PlanetName={ `earth` }/>
            <MenuPlanet handleClick={ handleClick } Color={ `#FF6A45` } PlanetName={ `mars` }/>
            <MenuPlanet handleClick={ handleClick } Color={ `#ECAD7A` } PlanetName={ `jupiter` }/>
            <MenuPlanet handleClick={ handleClick } Color={ `#FCCB6B` } PlanetName={ `saturn` }/>
            <MenuPlanet handleClick={ handleClick } Color={ `#65F0D5` } PlanetName={ `uranus` }/>
            <MenuPlanet handleClick={ handleClick } Color={ `#497EFA` } PlanetName={ `neptune` }/>
        </div>
    );
}

export default Menu;