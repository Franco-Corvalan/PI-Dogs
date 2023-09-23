// import { useEffect, useState } from "react";
// import { getTemperaments , filterOrigin , filterTemp , orderName ,orderWeight ,reset } from "../../redux/actions";
// import { useDispatch, useSelector } from "react-redux";

// function Filter() {
//     const dispatch = useDispatch();
//     const [selected, setSelected] = useState(false) // local state to show or not show temperaments dropdown
//     const [source, setSource] = useState(false) // local state to shot or not show source dropdown
//     const [order, setOrder] = useState(false) // local state to show or not show order dropdown
//     const [selectedSource, setSelectedSource] = useState('') // keeps track of selected source
//     const [selectedTemp, setSelectedTemp] = useState('') // keeps track of selected temperament
//     const [selectedOrder, setSelectedOrder] = useState('')
//     const [filtertype, setFilterType] = useState('') // keeps track of selected filter type (Temp or source)
//     const [orderType, setOrderType] = useState('') // keeps track of selected filter type (ASC or DESC)
    
//     const temperaments = useSelector((state) => state.temperaments.sort((a, b) => { return a.toLowerCase() > b.toLowerCase() ? 1 : -1 }));
    
//     useEffect(() => {
//         dispatch(getTemperaments())
//     }, [dispatch])

//     const handleSource = (evento) => {
//         setSelectedSource(evento.target.value)
//         dispatch(filterOrigin(evento.target.value))
        
//     }

//     const handleTemperament = (evento) => {
//         setSelectedTemp(evento.target.value);
//         dispatch(filterTemp(evento.target.value))
//     }

//     const handleChangeOrder = (evento) => {
//         setOrderType(evento.target.value)
//         setSelectedOrder('')
//         if (evento.target.value === 'name') {
//             dispatch(orderName('ASC'))
//             setOrder(true)
//         }
//         if (evento.target.value === 'weight') {
//             dispatch(orderWeight('ASC'))
//             setOrder(true)
//         }
//         if (evento.target.value === '') {
//             setOrderType('')
//             setOrder(false)
//         }
//     }

//     const handleOrder = (evento) => {
//         setSelectedOrder(evento.target.value)
//         if (orderType === 'name') {
//             if (evento.target.value === 'ASC') {
//                 dispatch(orderName('ASC'))
//             } else if (evento.target.value === 'DESC') {
//                 dispatch(orderName('DESC'))
//             }
//         }
//         else if (orderType === 'weight') {
//             if (evento.target.value === 'ASC') {
//                 dispatch(orderWeight('ASC'))
//             } else if (evento.target.value === 'DESC') {
//                 dispatch(orderWeight('DESC'))
//             }
//         }
//     }

//     const handleReset = () => {
//         setSelected(false)
//         setSource(false)
//         setOrder(false)
//         setSelectedTemp('')
//         setFilterType('')
//         setOrderType('')
//         setSelectedSource('')
//         dispatch(reset())
//     }



//     return (
//         <div className='filters'>
//             <div className='filterType'>
//                 <div id="temperamentsDropdown" >
//                     <select value={selectedTemp} className="selector" onChange={handleTemperament}>
//                         <option value="">Filter by Temperament...</option>
//                         {temperaments.map((temperament, index) => (
//                             <option key={index} value={temperament}>
//                                 {temperament}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <div id="sourceDropdown">
//                     <select value={selectedSource} className="selector" onChange={handleSource}>
//                         <option value="">Filter by Source...</option>
//                         <option value="api">API</option>
//                         <option value="database">DATABASE</option>
//                     </select>
//                 </div>
//             </div>
//             <div className='orderType'>
//                 <select value={orderType} className="selector" onChange={handleChangeOrder}>
//                     <option value="">Order By...</option>
//                     <option value="name">Name</option>
//                     <option value="weight">Weight</option>
//                 </select>

//                 {order && <div id="orderDropdown">
//                     <select value={selectedOrder} className="selector" onChange={handleOrder}>
//                         <option value="">Order...</option>
//                         <option value="ASC">ASC</option>
//                         <option value="DESC">DESC</option>
//                     </select>
//                 </div>}
//             </div>
//             <div>
//             <span className="button" onClick={handleReset}>RESET</span>
//             </div>

//         </div>
//     )
// }

// export default Filter

import React from "react";
import {useDispatch , useSelector} from "react-redux";
import { filterOrigin , orderName , orderWeight} from "../../redux/actions";

const Filter = () => {
    const dispatch = useDispatch();

    const temperaments = useSelector((state) => state.temperaments);

    console.log(temperaments)

    const handleOrigin = (event) => {
        dispatch(filterOrigin(event.target.value))
    }

    const handleName = (event) => {
        dispatch(orderName(event.target.value))
    }

    const handleWeight = (event) => {
        dispatch(orderWeight(event.target.value))
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
        </div>
    )
}

export default Filter;