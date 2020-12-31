// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  
  state = {name:""};
  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {type: 'ADD_BAND' , band: this.state };
    this.props.addBand(data);
    this.setState({name:""});
    // console.log(this.props.bands)
  }

  render() {
    return( 
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" value={this.state.name} onChange={event => this.handleChange(event)}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
