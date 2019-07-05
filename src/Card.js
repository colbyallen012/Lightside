import React from 'react';
import './Card.css';

const Card = ({data}) => {
  const displayItems = data.map(item => {
    const {name, birth_year, gender, height, eye_color, terrain, diameter, population, model, vehicle_class , passengers} = item;
      return (
      <div className="Card">
        <h3>{name}</h3>
        <p>{birth_year}</p>
        <p>{gender}</p>
        <p>{height}</p>
        <p>{eye_color}</p>
        <p>{terrain}</p>
        <p>{diameter}</p>
        <p>{population}</p>
        <p>{model}</p>
        <p>{vehicle_class}</p>
        <p>{passengers}</p>
      </div>
      )
  })
  
  return (
    <>
      {displayItems}
    </>
  )
}

export default Card;