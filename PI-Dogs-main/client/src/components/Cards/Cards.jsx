import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card/Card';

import './Cards.css';

const Cards = () => {
  
  const allDogs = useSelector((state) => state.dogs); 

  return (
    <div className="Cards">
      {allDogs.map((elem) => (
        <Card key={elem.id} dogs={elem} />
      ))}
    </div>
  );
};

export default Cards;


