import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchHouseData } from '../../fetch'
import { storeHouseData } from '../../actions'


class App extends Component {
  constructor () {
    super()
    this.state = {
      loading: true
    }
  }
  componentDidMount = async () => {
    const url = 'http://localhost:3001/api/v1/houses'
    const houseData = await fetchHouseData(url)
    await this.props.storeHouse(houseData)
    this.setState ({
      loading: false
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          {this.state.loading && <img src='https://78.media.tumblr.com/cb580cdcd118dc5465f0f1fb34ef0e38/tumblr_npd1m8L65f1uvbplno1_500.gif'/>}
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  storeHouse: func.isRequired
};

const mapStateToProps = ({ fake }) => ({ fake });

const mapDispatchToProps = dispatch => ({ 
  storeHouse: data => dispatch(storeHouseData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
