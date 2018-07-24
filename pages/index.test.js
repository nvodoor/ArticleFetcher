import Index from './index';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Index />', () => {
    let wrapper;

    it('should render on load', () => {
        wrapper = shallow(<Index />)
        expect(wrapper).toBeTruthy();
    })

    it('should render 0 items in the list on load', () => {
        wrapper = mount(<Index />)
        expect(wrapper.find('ul').text()).toEqual('');
    })
})