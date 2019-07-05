import React from 'react';
import { shallow, mount } from 'enzyme';
import NavBar from './NavBar';

describe('NavBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});