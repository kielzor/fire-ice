import React from 'react'

export const Card = (props) => {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <h1>{props.data.founded}</h1>
      <h1>{props.data.seats}</h1>
      <h1>{props.data.titles}</h1>
      <h1>{props.data.coatOfArms}</h1>
      <h1>{props.data.ancestralWeapons}</h1>
      <h1>{props.data.words}</h1>

    </div>
  )
}