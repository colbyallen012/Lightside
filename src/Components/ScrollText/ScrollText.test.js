import React from 'react';
import { shallow, mount } from 'enzyme';
import ScrollText from './ScrollText';
import mockMovieData from '../../Data/mockMovieData'

describe('ScrollText', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ScrollText movieInfo={mockMovieData}/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});