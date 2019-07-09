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

    mockCard = {name: 'batman', climate: 'windy', id: 1};

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
  });

  it('should remove a card from favorites when removeFavorite is called', () => {
    const expected = mockFavorites;

    navBarComponent.instance().addFavorite(mockCard)
    navBarComponent.instance().removeFavorite(mockCard)
    
    expect(navBarComponent.state('favorites')).toEqual(expected);
  });

  it('should add a card to favorites when appropriate after calling toggleFavorite', () => {
     const expected = [...mockFavorites, mockPeople[1]];

    navBarComponent.instance().toggleFavorite(mockPeople, 'Jenny');
    
    expect(navBarComponent.state('favorites')).toEqual(expected);
  });

  it('should remove a card to favorites when appropriate after calling toggleFavorite', () => {
    const mockFavoritedCard = {name: 'baby', age: 98, isFavorite: true}
    navBarComponent.setState({ favorites: [...mockFavorites, mockFavoritedCard] });

   navBarComponent.instance().toggleFavorite([...mockPeople, mockFavoritedCard], 'baby');
   
   expect(navBarComponent.state('favorites')).toEqual(mockFavorites);
 });
});