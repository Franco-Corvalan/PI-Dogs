import Search from "../SearchBar/Search";
import Filter from "../Filtre/Filter";
import { NavLink } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <NavLink className="NavItem" to='/home'>HOME</NavLink>
      <NavLink className="NavItem" to='/create'>CREATE</NavLink>
      <Filter className="NavItem"></Filter>
      <Search className="NavItem"></Search>
    </div>
  );
}

export default Nav;