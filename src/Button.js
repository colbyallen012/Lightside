import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    }
  }

  render() {
    return(
      <button>{this.props.name}</button>
    )
  }
}

export default Button;