import React from 'react';
import { NavLink } from 'react-router-dom';

import './Card.css';

export default function Card({ dogs }) {
  const { id, name, image, temperament, weight, height, life_span } = dogs;

  return (
    <div className="Card">
      <NavLink to={`/detail/${id}`}>
        <img className="Image" src={image} alt={name} />
        <h2 className="Name">{name}</h2>
        <p><strong>Life Span:</strong> {life_span}</p>
        <p><strong>Temperament:</strong> {temperament}</p>
        <p><strong>Height:</strong> {height} cm</p>
        <p><strong>Weight:</strong> {weight} kg</p>
      </NavLink>
    </div>
  );
}
