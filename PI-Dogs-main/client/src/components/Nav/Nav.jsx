import Search from "../SearchBar/Search";
import { NavLink } from "react-router-dom";

import "./Nav.css";

function Nav() {
    return (
      <div className="Nav">
        <h1>Navegacion</h1>
        
        <NavLink to='/home'>HOME</NavLink>
        <Search></Search>
      </div>
    );
  }
  
  export default Nav;