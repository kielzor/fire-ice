import React from 'react'
import './card.css'

export const Card = (props) => {
  return (
    <div className='card'>
      <h1>{props.data.name}</h1>
      <p>{props.data.founded}</p>
      <p>{props.data.seats}</p>
      <p>{props.data.titles}</p>
      <p>{props.data.coatOfArms}</p>
      <p>{props.data.ancestralWeapons}</p>
      <p>{props.data.words}</p>
    </div>
  )
}