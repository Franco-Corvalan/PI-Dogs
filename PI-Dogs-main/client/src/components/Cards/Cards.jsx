import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import Paginate from '../Paginado/Paginado';

import './Cards.css';

const Cards = () => {
  
  const {dogs , pagNum} = useSelector((state) => state); 
  const cantDogs = 8;
  console.log(dogs)

  let primero = (pagNum - 1) * cantDogs;
  let ultimo = pagNum * cantDogs;
  let cantPags = Math.floor(dogs.length / cantDogs);

  const showDogs = dogs.slice(primero,ultimo);

  console.log(showDogs)
  return (
    <div>
      <div className="Cards">
      {showDogs?.map((elem) => (
        <Card key={elem.id} dogs={elem} />
      ))}
    </div>

    <Paginate numPage={pagNum} cantPage={cantPags}></Paginate>
    </div>
    
  );
};

export default Cards;


