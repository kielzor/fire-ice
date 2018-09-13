import React, { Component } from 'react'
import './card.css'
import { getSwornMembers } from '../../cleaner'
import PropTypes from 'prop-types';


export class Card extends Component {
  constructor () {
    super()
    this.state = {
      clicked: false,
      members: []
    }
  } 

  handleClick = async (e) => {
    e.preventDefault()
    const clicked = !this.state.clicked

    this.setState ({
      clicked
    })

    if (this.state.members.length) return

    const members = await getSwornMembers(this.props.data.swornMembers)

    this.setState ({
      members
    })
  }

  render() {
    return (
      <div 
        className='card'
        onClick={this.handleClick}
      >
        <h1>{this.props.data.name}</h1>
        <p>{this.props.data.founded}</p>
        <p>{this.props.data.seats}</p>
        <p>{this.props.data.titles}</p>
        <p>{this.props.data.coatOfArms}</p>
        <p>{this.props.data.ancestralWeapons}</p>
        <p>{this.props.data.words}</p>
        {this.state.clicked && this.state.members.map(member => {
          return <p>{member.name}: {member.died || 'Alive'}</p>
        })}
      </div>
    )
  }

}
  Card.propTypes = {
    props: PropTypes.object
  }