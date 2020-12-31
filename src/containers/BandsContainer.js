import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from "../components/BandInput"


class BandsContainer extends Component {

  renderList = () => {
   return this.props.bands.map((band,id) => <li key={id}>{band.name}</li>)
  }
  render() 
  { return ( 
      <div>
        <BandInput bands={this.props.bands} addBand={this.props.addBand}/>
        <ul>{this.renderList()}</ul>
      </div>
    )}
}

const mapStateToProps = state => {
  console.log(state)
  return state;}

const mapDispatchToProps = dispatch => {
  return {addBand: (data) => dispatch(data)}
}

export default connect(mapStateToProps,mapDispatchToProps )(BandsContainer)
