import React, { Component } from 'react';
import './App.css';
import ScrollText from './ScrollText';
import NavBar from './NavBar';
import CardContainer from './NavBar';

import mockMovieData from './mockMovieData';
import mockPeopleData from './mockPeopleData';
import mockPlanetsData from './mockPlanetsData';
import mockVehiclesData from './mockVehiclesData';


class App extends Component {
  constructor() {
    super ();
    this.state = {
      movie: mockMovieData.results[0],
      people: mockPeopleData.results,
      planets: mockPlanetsData.results,
      vehicles: mockVehiclesData.results,
      favorites: [],
      error: ''
    }
  }

  componentDidMount() {
    const randomNumber = Math.floor(Math.random() * mockMovieData.results.length)
    // this.setState({ movie: mockMovieData.results[randomNumber] })
    this.setState( { movie: mockMovieData.results[randomNumber] });
  }

  // componentDidMount() {
  //   const peopleUrl = "https://swapi.co/api/people/";

  //   fetch(peopleUrl)
  //     .then(response => response.json())
  //     .then(peopleData => this.setState({ people: peopleData.results }))
  //     .catch(error => this.setState({ error: error.message }))

  //   const planetUrl = "https://swapi.co/api/planets/";

  //   fetch(planetUrl)
  //     .then(response => response.json())
  //     .then(planetData => this.setState({ planets: planetData.results }))
  //     .catch(error => this.setState({ error: error.message }))

  //   const vehicleUrl = "https://swapi.co/api/vehicles/";

  //   fetch(vehicleUrl)
  //     .then(response => response.json())
  //     .then(vehicleData => this.setState({ vehicles: vehicleData.results }))
  //     .catch(error => this.setState({ error: error.message }))

  //   const movieUrl = "https://swapi.co/api/films/"

  //   fetch(movieUrl)
  //     .then(response => response.json())
  //     .then(movieData => this.setState({ movies: movieData.results }))
  //     .catch(error => this.setState({ error: error.message }))
  // }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Lightside</h1>
        </header>
        <ScrollText movieInfo={ this.state.movie }/>
        <NavBar people={ this.state.people } vehicles={ this.state.vehicles } planets={ this.state.planets }/>
      </div>
    )
  }
}

export default App;
