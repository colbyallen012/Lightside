import React from 'react'
import Card from './Card'
import './CardContainer.css'

const CardContainer = ({content}) => {

  const peopleCards = content.map(person => {
    return (
      <Card
        name={person.name}
        birthYear={person.birth_year}
        gender={person.gender}
        height={person.height}
        eyeColor={person.eye_color}
      />
    )
  })

  // const planetCards = content.map(planet => {
  //   return (
  //     <Card
  //       name={planet.name}
  //     />
  //   )
  // })


  return (
    <div className='card-area'>
      {peopleCards}
      {/* {planetCards} */}
    </div>
  )
}

export default CardContainer;