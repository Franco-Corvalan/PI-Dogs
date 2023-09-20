import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../../redux/actions';

import Card from '../Card/Card';

const Cards = () => {
    
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogs)
    const [Dogs, setDogs] = useState(allDogs)
  
    useEffect(() => {
      dispatch(getDogs());
    }, [dispatch]);
  
    useEffect(() => {
      setDogs(allDogs);
    }, [allDogs]);
  
    return (
      <div className="Cards">
        {
          Dogs.map((elem) => (<Card dogs={elem}/>))
        }
      </div>
    )
  }
  
  export default Cards;