//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxSegmentControl} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxSegmentControl />', function () {

    const items = [
        {
            "id": "0",
            "label":"Title 1",
            "isActive" : false
        },
        {
            "id": "1",
            "label":"Title 2",
            "isActive" : true
        },
        {
            "id": "2",
            "label":"Title 3",
            "isActive" : false
        },
        {
            "id": "3",
            "label":"Title 4",
            "isActive" : false
        }
    ]

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxSegmentControl data = {items} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxSegmentControl component', function () {
        const wrapper = shallow(<BlocxSegmentControl data = {items} />);
        expect(wrapper).toBeTruthy();
    });
    
    it('should trigger click event when segment item is clicked', function () {
        const itemClick = jest.fn();
        const wrapper = mount(<BlocxSegmentControl data = {items}><a onClick = {itemClick}/></BlocxSegmentControl>);
        wrapper.find('a').first().simulate('click');
        expect(itemClick).toBeDefined();
    });

});