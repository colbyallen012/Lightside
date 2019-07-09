import React from 'react';
import { shallow, mount } from 'enzyme';
import NavBar from './NavBar';

describe('NavBar', () => {
  let navBarComponent;
  let mockPeople;
  let mockVehicles;
  let mockPlanets;
  let mockFavorites;
  let mockCard;

  beforeEach(() => {
    mockPeople = [
      {name: 'Tom', gender: 'female'},
      {name: 'Jenny', gender: 'female'}
    ]
    mockVehicles = [
      {name: 'boat', length: '2'},
      {name: 'car', length: '900'}
    ]
    mockPlanets = [
      {name: 'boops', climate: 'hot'},
      {name: 'fanta', climate: 'no'}
    ]

    mockFavorites = [
      {name: 'Jenny', gender: 'female'},
      {name: 'fanta', climate: 'no'}
    ]

    mockCard = {name: 'batman', climate: 'windy'};

    navBarComponent = shallow(
      <NavBar 
        people={mockPeople}
        vehicles={mockVehicles}
        planets={mockPlanets} 
      />
    )
    
    navBarComponent.setState({ favorites: mockFavorites });

  });

  it('should match snapshot', () => {
    expect(navBarComponent).toMatchSnapshot();
  });

  it('should update favorites array in state when addFavorite is called', () => {
    const expected = [...mockFavorites, mockCard];
    navBarComponent.instance().addFavorite(mockCard)

    expect(navBarComponent.state('favorites')).toEqual(expected);
  })
});