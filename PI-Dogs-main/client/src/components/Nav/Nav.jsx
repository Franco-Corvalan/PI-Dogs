import Search from "../SearchBar/Search";
import Filter from "../Filtre/Filter"
import { NavLink } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <h1>Navegacion</h1>

      <NavLink to='/home'>HOME</NavLink>
      <Filter></Filter>
      <Search></Search>
    </div>
  );
}

export default Nav;