import NavMenuIcon from '../assets/icon-hamburger.svg';
// Import style
import './styling/css/NavBar.css';

function NavBar({ MenuIsOpen, setMenuIsOpen }){
    // event handlers
    const handleOpen = () => {
        setMenuIsOpen(!MenuIsOpen);
    }

    return(
        <div className="NavBar">
            <div className="NarBarConetent">
                <div className="Logo">THE PLANETS</div>
                <img onClick={ handleOpen } className={ MenuIsOpen ? "MenuOpen":'' } src={ NavMenuIcon } alt="nav menu icon"></img>
            </div>
            <hr></hr>
        </div>
    );
}

export default NavBar;