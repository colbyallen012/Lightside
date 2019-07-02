import React, { Component } from 'react';
import './App.css';
import ScrollText from './ScrollText';
import NavBar from './NavBar';
import CardContainer from './CardContainer';

class App extends Component {
  constructor() {
    super ();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      error: ''
    }
  }

  // componentDidMount() {
  //   const peopleUrl = "https://swapi.co/api/people/";

  //   fetch(peopleUrl)
  //     .then(response => response.json())
  //     .then(peopleData => this.setState({ people: peopleData.results }))
  //     .catch(error => this.setState({ error }))

  //   const planetUrl = "https://swapi.co/api/planets/";

  //   fetch(planetUrl)
  //     .then(response => response.json())
  //     .then(planetData => this.setState({ planets: planetData.results }))
  //     .catch(error => this.setState({ error }))

  //   const vehicleUrl = "https://swapi.co/api/vehicles/";

  //   fetch(vehicleUrl)
  //     .then(response => response.json())
  //     .then(vehicleData => this.setState({ vehicles: vehicleData.results }))
  //     .catch(error => this.setState({ error }))
  // }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Lightside</h1>
        </header>
        <ScrollText />
        <NavBar />
        <CardContainer />
      </div>
    )
  }
}

export default App;
