//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxList} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxList />', function () {
    const items = [
        {
            "id": "0",
            "label": "Title 1",
            "url": "#/"
        }, 
        {
            "id": "1",
            "label": "Title 2",
            "url": "#/"
        }, 
        {
            "id": "2",
            "label": "Title 3",
            "url": "#/"
        }, 
        {
            "id": "3",
            "label": "Title 4",
            "url": "#/"
        }
    ]

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxList data = { items } />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxList component', function () {
        const wrapper = shallow(<BlocxList data = { items } />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger handleClick when a menu item is clicked', function () {
        const mockHandleClick = jest.fn();
        const wrapper = shallow((<BlocxList data = { items } onClick={mockHandleClick} />));
        wrapper.find('a').at(0).simulate('click');
        expect(mockHandleClick).toHaveBeenCalled();
    });

});