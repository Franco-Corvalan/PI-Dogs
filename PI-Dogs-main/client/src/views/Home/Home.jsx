
import Cards from '../../components/Cards/Cards';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getDogs , getTemperaments } from '../../redux/actions';

import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs())
  },[]);

  useEffect(() => {
    dispatch(getTemperaments())
  },[])

  return(
    <div>
      <Cards></Cards>
    </div>
  )
}

export default Home;