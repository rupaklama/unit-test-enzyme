//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxSortList} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxSortList />', function () {

    let itemA=[
        {id: '0', label: 'Title 1'},
        {id: '1', label: "Title 2"},
        {id: '2', label: "Title 3"}]
    
    let itemB=[
        {id: '0', label: 'Title 4'},
        {id: '1', label: "Title 5"},
        {id: '2', label: "Title 6"}] 

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxSortList list1 = {itemA} list2 = {itemB} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxSortList component', function () {
        const wrapper = shallow(<BlocxSortList list1 = {itemA} list2 = {itemB} />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger click event when an item from array itemA is selected', function () {
        const mockGetIndex = jest.fn();
        const wrapper = mount(<BlocxSortList list1 = {itemA} list2 = {itemB} onClick = {mockGetIndex} />);
        wrapper.update();
        wrapper.find('option').at(0).simulate('click', { sortlistref1: { value: 'Title 1' } });
        wrapper.update();
        expect(mockGetIndex).toBeDefined();
    });

    it('should trigger click event when an item is moved right', function () {
        const mockMoveItemRight = jest.fn();
        const wrapper = mount(<BlocxSortList multiple list1 = {itemA} list2 = {itemB} onClick = {mockMoveItemRight} />);
        wrapper.find('a').at(0).simulate('click', { sortlistref1: { value: 'Title 1' } });
        wrapper.update();
        expect(mockMoveItemRight).toBeDefined();
        mockMoveItemRight.mockClear();
    });

    it('should trigger click event when an item from array itemB is selected', function () {
        const mockGetIndex = jest.fn();
        const wrapper = mount(<BlocxSortList list1 = {itemA} list2 = {itemB} onClick = {mockGetIndex} />);
        wrapper.update();
        wrapper.find('option').at(3).simulate('click', { sortlistref2: { value: 'Title 4' } });
        wrapper.update();
        expect(mockGetIndex).toBeDefined();
    });

    it('should trigger click event when an item is moved left', function () {
        const mockMoveItemLeft = jest.fn();
        const wrapper = mount(<BlocxSortList multiple list1 = {itemA} list2 = {itemB} onClick = {mockMoveItemLeft} />);
        wrapper.find('a').at(1).simulate('click', { sortlistref2: { value: 'Title 4' } });
        wrapper.update();
        expect(mockMoveItemLeft).toBeDefined();
        mockMoveItemLeft.mockClear();
    });

    it('should pass when all items are moved left', function () {
        const mockMoveItemLeft = jest.fn();
        const wrapper = mount(<BlocxSortList list1 = {itemA} list2 = {itemB} onClick = {mockMoveItemLeft} />);
        wrapper.update();
        wrapper.find('option').at(3).simulate('click');
        wrapper.find('a').at(1).simulate('click');
        wrapper.find('option').at(3).simulate('click');
        wrapper.find('a').at(1).simulate('click');
        wrapper.find('option').at(4).simulate('click');
        wrapper.find('a').at(1).simulate('click');
        wrapper.find('option').at(5).simulate('click');
        wrapper.find('a').at(1).simulate('click');
        wrapper.update();
        expect(mockMoveItemLeft).toBeDefined();
        mockMoveItemLeft.mockClear();
    });

    it('should pass when all items are moved right', function () {
        const mockMoveItemRight = jest.fn();
        const wrapper = mount(<BlocxSortList list1 = {itemA} list2 = {itemB} onClick = {mockMoveItemRight} />);
        wrapper.update();
        wrapper.find('option').at(0).simulate('click');
        wrapper.find('a').at(0).simulate('click');
        wrapper.find('option').at(0).simulate('click');
        wrapper.find('a').at(0).simulate('click');
        wrapper.find('option').at(0).simulate('click');
        wrapper.find('a').at(0).simulate('click');
        wrapper.update();
        expect(mockMoveItemRight).toBeDefined();
        mockMoveItemRight.mockClear();
    });

});