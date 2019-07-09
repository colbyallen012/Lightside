import React, { Component } from 'react';
import './App.css';
import ScrollText from './Components/ScrollText/ScrollText';
import NavBar from './Components/Navbar/NavBar';
import Logo from './Images/Star_Wars_logo-1.png'
import { Route, NavLink } from 'react-router-dom';
import { getMovieData, getPeopleData, getPlanetData, getVehicleData } from './apiCalls';


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

componentDidMount() {
    getPeopleData()
      .then(people => this.setState({people: people.results}))
      .catch(error => this.setState({ error: error.message }))    

    getPlanetData()
      .then(planets => this.setState({ planets: planets.results }))
      .catch(error => this.setState({ error: error.message }))

    getVehicleData()
      .then(vehicles => this.setState({ vehicles: vehicles.results }))
      .catch(error => this.setState({ error: error.message }))

    const randomNumber = Math.floor(Math.random() * 7)

    getMovieData()
      .then(movies => this.setState({ movie: movies.results[randomNumber] }))
      .catch(error => this.setState({ error: error.message }))
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
