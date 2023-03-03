import { useState, useEffect } from 'react';
import './styling/css/PlanetPage.css';
import SourceIcon from '../assets/icon-source.svg';

function PlanetPage({Data}){
    // states
    const [info, setInfo] = useState('overview');
    const [PlanetData, setPlanetData] = useState(Data);
    useEffect(() => {
        setInfo('overview');
        setPlanetData(Data);
      }, [Data]);
    // variables
    const PlanetImage = PlanetData.images.planet;
    const PlanetInternalImage = PlanetData.images.internal;
    const PlanetGeologyImage = PlanetData.images.geology;
    const PlanetName = PlanetData.name;
    const PlanetRotation = PlanetData.rotation;
    const PlanetRevolution = PlanetData.revolution;
    const PlanetRadius = PlanetData.radius;
    const PlanetTemp = PlanetData.temperature;
    const PlanetDesc = PlanetData.overview.content;
    const PlanetDescSource = PlanetData.overview.source;
    const PlanetStructure = PlanetData.structure.content;
    const PlanetStructureSource = PlanetData.structure.source;
    const PlanetSurface = PlanetData.geology.content;
    const PlanetSurfaceSource = PlanetData.geology.source;

    function InfoToBeShown(info){
        switch(info){
            case 'overview': return [PlanetImage, PlanetDesc, PlanetDescSource];
            case 'structure':  return [PlanetInternalImage, PlanetStructure, PlanetStructureSource];
            case 'surface': return [PlanetImage, PlanetSurface, PlanetSurfaceSource, PlanetGeologyImage];
            default: return [PlanetImage, PlanetDesc, PlanetDescSource];
        }
    }

    const result = InfoToBeShown(info);


    // event handlers
    const handleClick = (event) => {
        setInfo(event.target.getAttribute("data-value"));
    }

    return(
        <div className="PlanetPage">
            <ol className="PageNavBar">
                <li onClick={ handleClick } className={ info === 'overview' ? 'ActiveInfo':'' } data-value="overview">overview</li>
                <li onClick={ handleClick } className={ info === 'structure' ? 'ActiveInfo':'' } data-value="structure">structure</li>
                <li onClick={ handleClick } className={ info === 'surface' ? 'ActiveInfo':'' } data-value="surface">surface</li>
            </ol>
            <hr></hr>
            <img className={ `PlanetImage` } src={ result[0] } alt="planet"></img>
                { result[3] && <img className={ `PlanetSurfaceImage` } src={ result[3] } alt="planet"></img> }
                <div className="Desc">
                <h1>{ PlanetName }</h1>
                    <p className="desc">{ result[1] }</p>
                    <div className="Source">
                        <span>Source: </span>
                        <a href={ result[2] }>Wikipedia</a>
                        <img src={ SourceIcon } alt="redirect"></img>
                    </div>
                </div>
                
                <div className="BasicData">
                    <div className="Rotation">
                        <span>Rotation Time</span>
                        <strong>{ PlanetRotation }</strong>
                    </div>
                    <div className="Revolution">
                        <span>Revolution Time</span>
                        <strong>{ PlanetRevolution }</strong>
                    </div>
                    <div className="Radius">
                        <span>Radius</span>
                        <strong>{ PlanetRadius }</strong>
                    </div>
                    <div className="Temp">
                        <span>Average Temp</span>
                        <strong>{ PlanetTemp }</strong>
                    </div>
                </div>
            
        </div>
    );
}

export default PlanetPage;