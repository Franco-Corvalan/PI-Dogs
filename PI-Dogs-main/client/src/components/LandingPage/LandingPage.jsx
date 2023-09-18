import { NavLink } from "react-router-dom";

function Landing(){
    return(
        <div>
            <h1>WELCOM!!!!</h1>
            <div>
                <NavLink to='/home'>
                    <span>HOME</span>
                    <h1>HOLA ESTA ES MI PAG</h1>
                </NavLink>
            </div>
        </div>
    )
}

export default Landing;