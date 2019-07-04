import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import Landing from './Landing';
import Card from './Card';
import mockPeopleData from './mockPeopleData'
import mockPlanetsData from './mockPlanetsData'
import mockVehicleData from './mockVehiclesData'
import './NavBar.css'
import r2d2 from './r2d2.svg'
import mFalcon from './millennium-falcon.svg'
import dStar from './death-star.svg'


class NavBar extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <main>
        <section className='nav'>
          <NavLink to='/people' className='nav'>People <img src={r2d2}/></NavLink>
          <NavLink to='/planets' className='nav'>Planets<img src={dStar}/> </NavLink>
          <NavLink to='/vehicles' className='nav'>Vehicles <img src={mFalcon}/></NavLink>
          <NavLink to='/favorites' className='nav'>Favorites</NavLink>
        </section>
          <Route exact path='/' component={Landing} />
        <section className='card-container'>
          <Route exact path='/People' render={() => <Card data={mockPeopleData.results}/>} />
          <Route exact path='/Planets' render={() => <Card data={mockPlanetsData.results}/>} />          
          <Route exact path='/Vehicles' render={() => <Card data={mockVehicleData.results}/>} />
        </section>
      </main>
    )
  }
}

export default NavBar;