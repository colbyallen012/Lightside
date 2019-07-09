import React from 'react';
import './Card.css';
import grayHeart from '../../Images/gray-heart.svg';
import favoriteHeart from '../../Images/favorite.svg'

const Card = ({data, toggleFavorite}) => {
  const displayItems = data.map((item, index) => {
    const {name, birth_year, gender, height, eye_color, terrain, diameter, population, model, vehicle_class , passengers} = item;
      return (
      <div className="Card" key={name}>
        <h3 key={name} >{name}</h3>
        <p key={birth_year}>{birth_year && <span>Birth Year:</span>} {birth_year}</p>
        <p key={gender}>{gender && <span>Gender:</span>} {gender}</p>
        <p key={height}>{height && <span>Height:</span>} {height}</p>
        <p key={eye_color}>{eye_color && <span>Eye Color:</span>} {eye_color}</p>
        <p key={terrain}>{terrain && <span>Terrain:</span>} {terrain}</p>
        <p key={diameter}>{diameter && <span>Diameter:</span>} {diameter}</p>
        <p key={population}>{population && <span>Population:</span>} {population}</p>
        <p key={model}>{model && <span>Model:</span>} {model}</p>
        <p key={vehicle_class}>{vehicle_class && <span>Vehicle Class:</span>} {vehicle_class}</p>
        <p key={passengers}>{passengers && <span>Passengers:</span>} {passengers}</p>
        <button className='favoriteButton'
        onClick={(e) => toggleFavorite(data, name)} >
          <img alt='favorite'
            src={grayHeart || favoriteHeart}
          />
        </button>
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