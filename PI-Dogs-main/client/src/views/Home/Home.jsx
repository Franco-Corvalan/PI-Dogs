
import Cards from '../../components/Cards/Cards';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getDogs } from '../../redux/actions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs())
  },[]);

  return(
    <div>
      <Cards></Cards>
    </div>
  )
}

export default Home;