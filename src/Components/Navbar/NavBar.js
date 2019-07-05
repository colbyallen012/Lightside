import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import Landing from '../Landing/Landing';
import Card from '../Card/Card';
import mockPeopleData from '../../Data/mockPeopleData'
import mockPlanetsData from '../../Data/mockPlanetsData'
import mockVehicleData from '../../Data/mockVehiclesData'
import './NavBar.css'
import r2d2 from '../../Images/r2d2.svg'
import mFalcon from '../../Images/millennium-falcon.svg'
import dStar from '../../Images/death-star.svg'



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