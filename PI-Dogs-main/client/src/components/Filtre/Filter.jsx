import React from "react";
import {useDispatch , useSelector} from "react-redux";
import { filterOrigin , orderName , orderWeight , filterTemp , reset} from "../../redux/actions";
import './Filter.css';
import { useState } from "react";

const Filter = () => {
    const dispatch = useDispatch();

    const temperaments = useSelector((state) => state.temperaments);
    const [origin,setOrigin] = useState('Default');
    const [name,setName] = useState('Default');
    const [weight,setWeight] = useState('Default');
    const [temp,setTemp] = useState('Default');

    console.log(temperaments)

    const handleOrigin = (event) => {
        setOrigin(event.target.value)
        dispatch(filterOrigin(event.target.value))
    }

    const handleName = (event) => {
        setName(event.target.value)
        dispatch(orderName(event.target.value))
    }

    const handleWeight = (event) => {
        setWeight(event.target.value)
        dispatch(orderWeight(event.target.value))
    }

    const handleTemp = (event) => {
        setTemp(event.target.value)
        dispatch(filterTemp(event.target.value))
    }

    const handleReset = () => {
        setOrigin('Default')
        setName('Default')
        setWeight('Default')
        setTemp('Default')
        dispatch(reset())
    }

    return (
        <div className="Filtro">
            <select className="FiltroItem" value={origin} name="Origin" onChange={handleOrigin}>
                <option value="Default" disabled selected>(Origin)</option>
                <option value="ALL">ALL</option>
                <option value="API">API</option>
                <option value="DB">DB</option>
            </select>

            <select className="FiltroItem" value={name} name="NAME" onChange={handleName}>
                <option value="Default" disabled selected>(Select)</option>
                <option value="ASC">A-Z</option>
                <option value="DES">Z-A</option>
            </select>

            <select className="FiltroItem" value={weight} name="WEIGHT" onChange={handleWeight}>
                <option value="Default" disabled selected>(Select)</option>
                <option value="ASC">MAY-MEN</option>
                <option value="DES">MEN-MAY</option>
            </select>

            <select className="FiltroItem" value={temp} name="TEMP" onChange={handleTemp}>
                <option value="Default" disabled selected>(Select Temp)</option>
                {temperaments?.map((temperament)=>{
                    return (
                        <option value={temperament.name} key={temperament.id}>{temperament.name}</option>
                    )
                })}
            </select>

            <button className="Button" onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Filter;