import React, { Component } from 'react';
import Button from './Button';
import './NavBar.css';

const NavBar = props => {
  return (
    <section>
      <Button name="People"/>
      <Button name="Planets"/>
      <Button name="Vehicles"/>
    </section>
  )
}

export default NavBar;