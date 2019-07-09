import React, {Component} from 'react';
import NavBar from './Components/Navbar/NavBar';
import Card from './Components/Card/Card';

class CardContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentCategory: ''
    }
  }

  changeCategory= (e) => {
    const currentCategory = e.target.innerText;
    this.setState({currentCategory})
  }

  render() {
    return (
      <main>
        <NavBar People={ this.props.people } vehicles={ this.props.vehicles } planets={ this.props.planets } category={this.state.currentCategory} changeCategory={this.changeCategory}/>
      </main>
    )
  }
}

export default CardContainer;
