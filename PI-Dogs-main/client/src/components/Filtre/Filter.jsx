import React from "react";
import {useDispatch , useSelector} from "react-redux";
import { filterOrigin , orderName , orderWeight , filterTemp , reset} from "../../redux/actions";

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
        <div>
            <select className="ContainerOrig" name="Origin" onChange={handleOrigin}>
                <option value="Default" disabled selected>(Select)</option>
                <option value="ALL">ALL</option>
                <option value="API">API</option>
                <option value="DB">DB</option>
            </select>

            <select className="ContainerName" name="NAME" onChange={handleName}>
                <option value="Default" disabled selected>(Select)</option>
                <option value="ASC">ASC</option>
                <option value="DES">DES</option>
            </select>

            <select className="ContainerWeight" name="WEIGHT" onChange={handleWeight}>
                <option value="Default" disabled selected>(Select)</option>
                <option value="ASC">ASC</option>
                <option value="DES">DES</option>
            </select>

            <select className="ContainerTemp" name="TEMP" onChange={handleTemp}>
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