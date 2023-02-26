import './styling/css/MenuPlanet.css';
import RightArrowIcon from '../assets/icon-chevron.svg'

function MenuPlanet({Color, PlanetName, handleClick}){
    return(
        <div className="MenuPlanet">
            <div className="MenuWrapper" data-value={ PlanetName } onClick={ handleClick }>
                <div className="MenuContent" data-value={ PlanetName }>
                    <div className="PlanetIcon" style={{backgroundColor : `${ Color }` }} data-value={ PlanetName }></div>
                    <div className="PlanetName" data-value={ PlanetName }>{ PlanetName }</div>
                </div>
                <img src={ RightArrowIcon } alt="right arrow icon" data-value={ PlanetName }></img>
            </div>
            <hr></hr>
        </div>
    );
    
}

export default MenuPlanet;