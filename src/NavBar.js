import React, { Component } from 'react';
import Card from './Card';
import './NavBar.css'
import CardContainer from './CardContainer';

class NavBar extends Component {
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
      <section>
        {this.state.activeButton === 'People' && <CardContainer content={this.props.people} />}
        {/* {this.state.activeButton === 'Planets' && <CardContainer content={this.props.planets} />} */}
      </section>
      </main>
    )
  }
}

export default NavBar;