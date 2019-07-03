import React from 'react';
import './Card.css';

const Card = ({name, birthYear, gender, height, eyeColor}) => {
  
  return (
    <div className="Card">
      <h3>{name}</h3>
      <p>Birthyear: {birthYear}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Eye Color: {eyeColor}</p>
    </div>
  )
}

export default Card;