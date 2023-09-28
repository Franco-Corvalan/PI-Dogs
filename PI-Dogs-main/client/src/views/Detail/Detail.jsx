import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDogId , clear } from '../../redux/actions';

import './Detail.css';
import { useEffect } from 'react';

function Detail() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.dogsID);

  useEffect(() => {
    dispatch(clear())
    dispatch(getDogId(id))
  }, [dispatch]);

  return (
    <div className='detalle'>
       <div className="info">
      <img className="img" src={dog.image} alt={dog.name} />
      <h1 className="Name">{dog.name}</h1>
      <h2>Life Span: {dog.life_span}</h2>
      <h2>Temperament: {dog.temperament}</h2>
      <h2>Height: {dog.height} cm</h2>
      <h2>Weight: {dog.weight} kg</h2>
      <NavLink to={'/home'}><button>RETURN HOME</button></NavLink>
    </div>
    </div>
   
  );
}

export default Detail;