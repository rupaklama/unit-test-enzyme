//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxToolBox} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxToolBox />', function () {

    let items=[
        {id: '0', label : 'fa fa-chevron-left'},
        {id: '1', label : 'fa fa-chevron-right'},
        {id: '2', label:'fa fa-scissors'},
        {id: '3' ,label:'fa fa-clipboard'},
        {id: '4' ,label:"fa fa-list-alt"},
        {id: '5' ,label:"fa fa-calendar"},
        {id: '6' ,label:"fa fa-angle-down"},
    ]

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxToolBox data = { items } />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxToolBox component', function () {
        const wrapper = shallow(<BlocxToolBox data = { items } />);
        expect(wrapper).toBeTruthy();
    });

    it('should call handleEvent when left icon when clicked', function () {
        const handleEvent = jest.fn();
        const wrapper = shallow((<BlocxToolBox data = { items } onClick={handleEvent} />));
        wrapper.find('i').at(0).simulate('mouseover', {type: 'mouseover', preventDefault: () => {}});
        wrapper.find('i').at(0).simulate('click', {type: 'click', preventDefault: () => {}});
        wrapper.find('i').at(0).simulate('mouseout', {type: 'mouseout', preventDefault: () => {}});
        expect(handleEvent).toHaveBeenCalled();
    });

    it('should call handleEvent when right icon when clicked', function () {
        const handleEvent = jest.fn();
        const wrapper = shallow((<BlocxToolBox data = { items } onClick={handleEvent} />));
        wrapper.find('i').at(1).simulate('mouseover', {type: 'mouseover', preventDefault: () => {}});
        wrapper.find('i').at(1).simulate('click', {type: 'click', preventDefault: () => {}});
        wrapper.find('i').at(1).simulate('mouseout', {type: 'mouseout', preventDefault: () => {}});
        expect(handleEvent).toHaveBeenCalled();
    });

    it('should call handleEvent when scissors icon when clicked', function () {
        const handleEvent = jest.fn();
        const wrapper = shallow((<BlocxToolBox data = { items } onClick={handleEvent} />));
        wrapper.find('i').at(2).simulate('mouseover', {type: 'mouseover', preventDefault: () => {}});
        wrapper.find('i').at(2).simulate('click', {type: 'click', preventDefault: () => {}});
        wrapper.find('i').at(2).simulate('mouseout', {type: 'mouseout', preventDefault: () => {}});
        expect(handleEvent).toHaveBeenCalled();
    });

    it('should call handleEvent when clipboard icon when clicked', function () {
        const handleEvent = jest.fn();
        const wrapper = shallow((<BlocxToolBox data = { items } onClick={handleEvent} />));
        wrapper.find('i').at(3).simulate('mouseover', {type: 'mouseover', preventDefault: () => {}});
        wrapper.find('i').at(3).simulate('click', {type: 'click', preventDefault: () => {}});
        wrapper.find('i').at(3).simulate('mouseout', {type: 'mouseout', preventDefault: () => {}});
        expect(handleEvent).toHaveBeenCalled();
    });

    it('should call handleEvent when list alt icon when clicked', function () {
        const handleEvent = jest.fn();
        const wrapper = shallow((<BlocxToolBox data = { items } onClick={handleEvent} />));
        wrapper.find('i').at(4).simulate('mouseover', {type: 'mouseover', preventDefault: () => {}});
        wrapper.find('i').at(4).simulate('click', {type: 'click', preventDefault: () => {}});
        wrapper.find('i').at(4).simulate('mouseout', {type: 'mouseout', preventDefault: () => {}});
        expect(handleEvent).toHaveBeenCalled();
    });

    it('should call handleEvent when calendar icon when clicked', function () {
        const handleEvent = jest.fn();
        const wrapper = shallow((<BlocxToolBox data = { items } onClick={handleEvent} />));
        wrapper.find('i').at(5).simulate('mouseover', {type: 'mouseover', preventDefault: () => {}});
        wrapper.find('i').at(5).simulate('click', {type: 'click', preventDefault: () => {}});
        wrapper.find('i').at(5).simulate('mouseout', {type: 'mouseout', preventDefault: () => {}});
        expect(handleEvent).toHaveBeenCalled();
    });

    it('should call handleEvent when angle down icon when clicked', function () {
        const handleEvent = jest.fn();
        const wrapper = shallow((<BlocxToolBox data = { items } onClick={handleEvent} />));
        wrapper.find('i').at(6).simulate('mouseover', {type: 'mouseover', preventDefault: () => {}});
        wrapper.find('i').at(6).simulate('click', {type: 'click', preventDefault: () => {}});
        wrapper.find('i').at(6).simulate('mouseout', {type: 'mouseout', preventDefault: () => {}});
        expect(handleEvent).toHaveBeenCalled();
    });

    it('should call handleEvent when type = `default`', function () {
        const handleEvent = jest.fn();
        const wrapper = shallow((<BlocxToolBox data = { items } onClick={handleEvent} />));
        wrapper.find('i').at(0).simulate('click', {type: 'default', preventDefault: () => {}});
        expect(handleEvent).not.toHaveBeenCalled();
    });

});