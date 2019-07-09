import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import Landing from '../Landing/Landing';
import Card from '../Card/Card';
import PropTypes from 'prop-types'
import './NavBar.css'
import r2d2 from '../../Images/r2d2.svg'
import mFalcon from '../../Images/millennium-falcon.svg'
import dStar from '../../Images/death-star.svg';



class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    }
  }

  addFavorite = (selectedFavorite) => {
    const updatedFavorites = [...this.state.favorites, selectedFavorite];
    this.setState({ favorites: updatedFavorites });
  }

  removeFavorite = (selectedFavorite) => {
    let filteredFavorites = this.state.favorites.filter(favorite => favorite.name !== selectedFavorite.name);
    this.setState({ favorites: filteredFavorites });
  }

  toggleFavorite = (data, name) => {
    const selectedFavorite = data.find(card => card.name === name)
    selectedFavorite.isFavorite = !selectedFavorite.isFavorite;
    console.log(selectedFavorite)
    if (selectedFavorite.isFavorite) {
      this.addFavorite(selectedFavorite)
    } else {
      this.removeFavorite(selectedFavorite)
    }
  }

  render() {
    return (
      <main>
        <section className='nav'>
          <NavLink to='/people' className='nav' activeClassName='active'>People <img className='r2d2' alt='r2d2' src={r2d2}/></NavLink>
          <NavLink to='/planets' className='nav'>Planets<img className='dStar' alt='death-star' src={dStar}/> </NavLink>
          <NavLink to='/vehicles' className='nav'>Vehicles <img className='mFalcon' alt='millennium-falcon' src={mFalcon}/></NavLink>
          <NavLink to='/favorites' className='nav'>Favorites ({this.state.favorites.length})</NavLink>
        </section>
          <Route exact path='/' component={Landing} />
        <section className='card-container'>
          <Route exact path='/People' render={() => <Card data={this.props.people} toggleFavorite={this.toggleFavorite} isFavorite={false}  />} />
          <Route exact path='/Planets' render={() => <Card data={this.props.planets} toggleFavorite={this.toggleFavorite} isFavorite={false}  />} />
          <Route exact path='/Vehicles' render={() => <Card data={this.props.vehicles} toggleFavorite={this.toggleFavorite} isFavorite={false}  />} />
          <Route exact path='/Favorites' render={() => <Card data={this.state.favorites} toggleFavorite={this.toggleFavorite} isFavorite={false} />} />
        </section>
      </main>
    )
  }
}

NavBar.propTypes = {
  people: PropTypes.arrayOf(),
  planets: PropTypes.arrayOf(),
  vehicles: PropTypes.arrayOf(),
}


export default NavBar;