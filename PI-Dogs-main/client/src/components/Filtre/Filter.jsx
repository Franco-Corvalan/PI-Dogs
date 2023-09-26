import React from "react";
import {useDispatch , useSelector} from "react-redux";
import { filterOrigin , orderName , orderWeight , filterTemp , reset} from "../../redux/actions";
import './Filter.css';

const Filter = () => {
    const dispatch = useDispatch();

    const temperaments = useSelector((state) => state.temperaments);

    console.log(temperaments.name)

    const handleOrigin = (event) => {
        dispatch(filterOrigin(event.target.value))
    }

    const handleName = (event) => {
        dispatch(orderName(event.target.value))
    }

    const handleWeight = (event) => {
        dispatch(orderWeight(event.target.value))
    }

    const handleTemp = (event) => {
        dispatch(filterTemp(event.target.value))
    }

    return (
        <div className="Filtro">
            <select className="FiltroItem" name="Origin" onChange={handleOrigin}>
                <option value="Default" disabled selected>(Select)</option>
                <option value="ALL">ALL</option>
                <option value="API">API</option>
                <option value="DB">DB</option>
            </select>

            <select className="FiltroItem" name="NAME" onChange={handleName}>
                <option value="Default" disabled selected>(Select)</option>
                <option value="ASC">A-Z</option>
                <option value="DES">Z-A</option>
            </select>

            <select className="FiltroItem" name="WEIGHT" onChange={handleWeight}>
                <option value="Default" disabled selected>(Select)</option>
                <option value="ASC">MAY-MEN</option>
                <option value="DES">MEN-MAY</option>
            </select>

            <select className="FiltroItem" name="TEMP" onChange={handleTemp}>
                <option value="ContainerTemp" disabled selected>(Select Temp)</option>
                {temperaments?.map((temperament)=>{
                    return (
                        <option value={temperament.name} key={temperament.id}>{temperament.name}</option>
                    )
                })}
            </select>

            <button className="Button" onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Filter;