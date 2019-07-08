import React, { Component } from 'react';
import './App.css';
import ScrollText from './Components/ScrollText/ScrollText';
import NavBar from './Components/Navbar/NavBar';
import Logo from './Images/Star_Wars_logo-1.png'
import { Route, NavLink } from 'react-router-dom';

import mockMovieData from './Data/mockMovieData';
import mockPeopleData from './Data/mockPeopleData';
import mockPlanetsData from './Data/mockPlanetsData';
import mockVehiclesData from './Data/mockVehiclesData';


class App extends Component {
  constructor() {
    super ();
    this.state = {
      movie: mockMovieData.results[0],
      people: mockPeopleData.results,
      planets: mockPlanetsData.results,
      vehicles: mockVehiclesData.results,
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

  // addFavorite = (favorite) => {
  //   const newFavorite = {...favorite, id: Date.now()};
  //   const favorites = [...this.state.favorites, newFavorite];
  //   this.setState({ favorites });
  // }

  render() {
    return (
      <div className="App">
        <header>
          <img className='sw-logo' src={Logo} />
        </header>
        <ScrollText movieInfo={ this.state.movie }/>
        <NavBar people={ this.state.people } vehicles={ this.state.vehicles } planets={ this.state.planets } />
      </div>
    )
  }
}

export default App;
