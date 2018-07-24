import Post from './post';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Post />', () => {
    let wrapper;

    it('should render on load', () => {
        wrapper = shallow(<Post />)
        expect(wrapper).toBeTruthy();
    })

})