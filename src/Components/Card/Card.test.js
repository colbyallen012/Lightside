import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';
import mockPeopleData from '../../Data/mockPeopleData';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card data={[mockPeopleData]} />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});