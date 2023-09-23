import { getDogName } from "../../redux/actions";
import { useDispatch } from "react-redux"
import React, { useState } from "react";

const Search = () => {

  const dispatch = useDispatch();
  const [onSearch, setOnSearch] = useState("");

  const handleChange = (event) => {
    setOnSearch(event.target.value)
  }

  const handleKeypress = (event) => {
    if (event.keyCode === 13) {
      dispatch(getDogName(onSearch))
    }
  };

  const add = () => {
    dispatch(getDogName(onSearch))
  }
  return (
    <div className="Nav">
      <h1>Buscar</h1>
      <input className="input" type='text' value={onSearch} onChange={handleChange} onKeyDown={handleKeypress}></input>
      <button className="boton" onClick={add}>Search</button>
    </div>
  );
}

export default Search;