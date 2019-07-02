import React, { Component } from 'react';
import Card from './Card';
import './CardContainer.css'

class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      activeButton: ''
    }
  }

  findContent = e => {
    this.setState({ activeButton: e.target.textContent })
  }

  render() {
    return (
      <main>
        <button 
          onClick={event => this.findContent(event)}
        >People</button>
        <button
          onClick={event => this.findContent(event)}
        >Planets</button>
        <button
          onClick={event => this.findContent(event)}
        >Vehicles</button>
        <button
          onClick={event => this.findContent(event)}
        >Favorites</button>
        { this.state.activeButton === 'people' && <Card content={ this.props.people } />}
      </main>
    )
  }
}

export default CardContainer;