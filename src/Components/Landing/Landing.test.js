import React from 'react';
import { shallow, mount } from 'enzyme';
import Landing from './Landing';

describe('Landing', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Landing />)
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

})