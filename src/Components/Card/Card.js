import React from 'react';
import './Card.css';

const Card = ({data}) => {
  const displayItems = data.map(item => {
    const {name, birth_year, gender, height, eye_color, terrain, diameter, population, model, vehicle_class , passengers} = item;
      return (
      <div className="Card">
        <h3>{name}</h3>
        <p>{birth_year && <span>Birth Year:</span>} {birth_year}</p>
        <p>{gender && <span>Gender:</span>} {gender}</p>
        <p>{height && <span>Height:</span>} {height}</p>
        <p>{eye_color && <span>Eye Color:</span>} {eye_color}</p>
        <p>{terrain && <span>Terrain:</span>} {terrain}</p>
        <p>{diameter && <span>Diameter:</span>} {diameter}</p>
        <p>{population && <span>Population:</span>} {population}</p>
        <p>{model && <span>Model:</span>} {model}</p>
        <p>{vehicle_class && <span>Vehicle Class:</span>} {vehicle_class}</p>
        <p>{passengers && <span>Passengers:</span>} {passengers}</p>
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