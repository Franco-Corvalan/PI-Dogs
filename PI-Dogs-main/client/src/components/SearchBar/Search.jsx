import { getDogName } from "../../redux/actions";
import { useDispatch } from "react-redux"
import React, { useState } from "react";
import './Search.css';

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
    <div className="Buscar">
      <input className="BuscarItem" type='text' value={onSearch} onChange={handleChange} onKeyDown={handleKeypress}></input>
      <button className="BuscarItem" onClick={add}>Search</button>
    </div>
  );
}

export default Search;