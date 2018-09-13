import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card } from '../card/Card'
import './cardContainer.css'

export class CardContainer extends Component {
   render() {
    return (
      <div className='card-container'>
        {this.props.data.map(data => {
        return <Card data={data} />
      })}
      </div>
    )
  }
}

export const mapStateToProps = state => ({ 
  data: state.HouseData
 });

export default connect(mapStateToProps)(CardContainer)
