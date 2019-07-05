import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter initialEntries={[ '/random' ]}>
        <App/>
      </BrowserRouter>
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});