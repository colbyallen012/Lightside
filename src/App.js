import React, { Component } from 'react';
import './App.css';
import ScrollText from './Components/ScrollText/ScrollText';
import NavBar from './Components/Navbar/NavBar';
import Logo from './Images/Star_Wars_logo-1.png'
import { Route, NavLink } from 'react-router-dom';

import { getMovieData, getPeopleData, getPlanetData, getVehicleData } from './apiCalls';

// import mockMovieData from './Data/mockMovieData';
// import mockPeopleData from './Data/mockPeopleData';
// import mockPlanetsData from './Data/mockPlanetsData';
// import mockVehiclesData from './Data/mockVehiclesData';


class App extends Component {
  constructor() {
    super ();
    this.state = {
      movie: {},
      people: [],
      planets: [],
      vehicles: [],
      error: ''
    }
  }

  async componentDidMount() {
    const randomNumber = Math.floor(Math.random() * 7);
    try {
      const movies = await getMovieData()
      const movie = movies.results[randomNumber]
      this.setState({ movie: movie })
    } catch (error) {
      this.setState({error: error.message})
    }

    try {
      const people = await getPeopleData();
      const peopleData = people.results;
      this.setState({people: peopleData})
    } catch (error) {
      this.setState({error: error.message})
    }

    try {
      const planet = await getPlanetData();
      const planetData = planet.results;
      this.setState({planets: planetData})
    } catch (error) {
      this.setState({error: error.message})
    }

    try {
      const vehicle = await getVehicleData();
      const vehicleData = vehicle.results;
      this.setState({vehicles: vehicleData})
    } catch (error) {
      this.setState({error: error.message})
    }
  }

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
