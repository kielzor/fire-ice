import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card } from '../../components/card/Card'
import './cardContainer.css'
import PropTypes from 'prop-types'

export class CardContainer extends Component {
   render() {
    return (
      <div className='card-container'>
        {this.props.data.map((data, i) => {
        return <Card key={i} data={data} />
      })}
      </div>
    )
  }
}

CardContainer.propTypes = {
  data: PropTypes.array
}

export const mapStateToProps = state => ({ 
  data: state.HouseData
 });

export default connect(mapStateToProps)(CardContainer)
