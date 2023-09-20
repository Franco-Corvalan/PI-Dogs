import Nav from '../../components/Nav/Nav';
import Cards from '../../components/Cards/Cards';

import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../../redux/actions';

import "./Home.css";

const Home = () => {
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
        Dogs.map((elem) => (
          <Cards
            id={elem.id}
            key={elem.id}
            image={elem.image}
            name={elem.name}
            life_span={elem.life_span}
            temperament={elem.temperament}
            weight={elem.weight}
            height={elem.height}
          />
        ))
      }
    </div>
  )
}

export default Home;