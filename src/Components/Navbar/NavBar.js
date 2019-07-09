import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import Landing from '../Landing/Landing';
import Card from '../Card/Card';
import mockPeopleData from '../../Data/mockPeopleData'
import mockPlanetsData from '../../Data/mockPlanetsData'
import mockVehicleData from '../../Data/mockVehiclesData'
import './NavBar.css'
import r2d2 from '../../Images/r2d2.svg'
import hoverR2d2 from '../../Images/hover-r2d2.svg'
import mFalcon from '../../Images/millennium-falcon.svg'
import hoverMFalcon from '../../Images/hover-millennium-falcon.svg'
import dStar from '../../Images/death-star.svg';
import hoverDStar from '../../Images/hover-death-star.svg'
import heart from '../../Images/heart.svg'
import hoverHeart from '../../Images/hover-heart.svg'
import favorite from '../../Images/favorite.svg';



class NavBar extends Component {
  constructor() {
    super();
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
          <NavLink to='/people' className='nav' activeClassName='active'>People <img className='r2d2' src={r2d2}/></NavLink>
          <NavLink to='/planets' className='nav'>Planets<img className='dStar' src={dStar}/> </NavLink>
          <NavLink to='/vehicles' className='nav'>Vehicles <img className='mFalcon' src={mFalcon}/></NavLink>
          <NavLink to='/favorites' className='nav'>Favorites ({this.state.favorites.length})</NavLink>
        </section>
          <Route exact path='/' component={Landing} />
        <section className='card-container'>
          <Route exact path='/People' render={() => <Card data={mockPeopleData.results} toggleFavorite={this.toggleFavorite} isFavorite={false}  />} />
          <Route exact path='/Planets' render={() => <Card data={mockPlanetsData.results} toggleFavorite={this.toggleFavorite} isFavorite={false}  />} />
          <Route exact path='/Vehicles' render={() => <Card data={mockVehicleData.results} toggleFavorite={this.toggleFavorite} isFavorite={false}  />} />
          <Route exact path='/Favorites' render={() => <Card data={this.state.favorites} toggleFavorite={this.toggleFavorite} isFavorite={false} />} />
        </section>
      </main>
    )
  }
}

export default NavBar;