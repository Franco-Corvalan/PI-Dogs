import Nav from '../../components/Nav/Nav';
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
  },[dispatch])

  return(
    <div>
      <Nav></Nav>
      <Cards></Cards>
    </div>
  )
}

export default Home;