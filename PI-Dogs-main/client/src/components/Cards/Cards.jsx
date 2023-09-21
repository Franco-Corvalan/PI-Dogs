import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../../redux/actions';

import Card from '../Card/Card';

import './Cards.css';

const Cards = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs); // Usar la lista completa de perros

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div className="Cards">
      {allDogs.map((elem) => (
        <Card key={elem.id} dogs={elem} />
      ))}
    </div>
  );
};

export default Cards;


