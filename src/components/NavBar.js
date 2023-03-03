import NavMenuIcon from '../assets/icon-hamburger.svg';
import './styling/css/NavBar.css';

function NavBar({ MenuIsOpen, setMenuIsOpen, windowSize, setPlanetIndex }){
    // event handlers
    const handleOpen = () => {
        setMenuIsOpen(!MenuIsOpen);
    }

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
        <div className="NavBar">
            <div className="NarBarContent">
                <div className="Logo">THE PLANETS</div>
                { windowSize[0] < 768 && <img onClick={ handleOpen } 
                className={ MenuIsOpen ? "MenuOpen":'' } 
                src={ NavMenuIcon } alt="nav menu icon"></img>}
                {
                    windowSize[0] >= 768 && <div className="Links">
                        <div onClick={ handleClick } className="PlanetLink" data-value={ `mercury` }>mercury</div>
                        <div onClick={ handleClick } className="PlanetLink" data-value={ `venus` }>venus</div>
                        <div onClick={ handleClick } className="PlanetLink" data-value={ `earth` }>earth</div>
                        <div onClick={ handleClick } className="PlanetLink" data-value={ `mars` }>mars</div>
                        <div onClick={ handleClick } className="PlanetLink" data-value={ `jupiter` }>jupiter</div>
                        <div onClick={ handleClick } className="PlanetLink" data-value={ `saturn` }>saturn</div>
                        <div onClick={ handleClick } className="PlanetLink" data-value={ `uranus` }>uranus</div>
                        <div onClick={ handleClick } className="PlanetLink" data-value={ `neptune` }>neptune</div>
                    </div>
                }

            </div>
            
            <hr></hr>
        </div>
    );
}

export default NavBar;