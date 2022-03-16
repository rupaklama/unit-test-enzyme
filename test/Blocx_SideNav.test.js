//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxSideNav} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxSideNav />', function () {
    const items = [
        { id: 0, label: 'test 1' },
        { id: 1, label: 'test 2' },
        { id: 2, label: 'test 3' }
    ]

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxSideNav data = { items } />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxSideNav component', function () {
        const wrapper = shallow(<BlocxSideNav data = { items } />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger click event when BlocxSideNav item is clicked', function () {
        const mockHandleClick = jest.fn();
        const wrapper = shallow((<BlocxSideNav data = { items } onClick={mockHandleClick} />));
        wrapper.find('a').at(1).simulate('click');
        expect(mockHandleClick).toHaveBeenCalled();
    });

});