import Search from "../SearchBar/Search";
import Filter from "../Filtre/Filter";
import { NavLink , useLocation} from "react-router-dom";

import "./Nav.css";

function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/home"
  const isCreate = location.pathname === "/create"
  return (
    <div className="Nav">

      <NavLink className="NavItem" to='/home'>HOME</NavLink>
      <NavLink className="NavItem" to='/create'>CREATE</NavLink>

      {isHome && <Filter className="NavItem"></Filter>} 
      {isHome && <Search className="NavItem"></Search>} 
    </div>
  );
}

export default Nav;