import { NavLink } from "react-router-dom";
import './LandingPage.css';
import imagen from '../../assets/1269810.jpg';

function Landing() {
    return (
        <div className="Contenedor">
            <img src={imagen} className="Imagen" ></img>
            <div className="Welcom">
                <h1 className="Titulo">WELCOM TO MY DOGS API !!!!</h1>
                <div>
                    <NavLink to='/home'>
                        <button>HOME</button>
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default Landing;