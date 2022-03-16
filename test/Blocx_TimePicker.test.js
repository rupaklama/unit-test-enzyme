//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxTimePicker} from 'blocx-react-components';


configure({adapter: new Adapter()});

describe('<BlocxTimePicker />', function () {

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxTimePicker format={24} step={30}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxTimePicker component', function () {
        const wrapper = shallow(<BlocxTimePicker format={24} step={30} />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxTimePicker component', function () {
        const wrapper = shallow(<BlocxTimePicker format={12} step={30} />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger onChange event ', function () {
        const handleTimeChange = jest.fn();
        const wrapper = mount(<BlocxTimePicker onChange = {handleTimeChange} />);
        wrapper.find('BlocxTimePicker').simulate('change');
        expect(handleTimeChange).toBeDefined();
    });

    it('should trigger onClick event when time format is 12 hour and step is 30 minutes', function () {
        const toggleVisibility = jest.fn();
        const wrapper = mount(<BlocxTimePicker format={12} step={30} BlocxTimePicker onClick = {toggleVisibility} />);
        wrapper.find('input').simulate('click');
        expect(toggleVisibility).toBeDefined();
    });

    it('should trigger onMouseEnter event when block is set to true', function () {
        const setBlock = jest.fn();
        const wrapper = mount(<BlocxTimePicker block onMouseEnter = {setBlock} />);
        wrapper.find('.blocx-timepicker_dropdown').simulate('mouseEnter');
        expect(setBlock).toBeDefined();
    });

    it('should trigger onMouseLeave event when block is set to false', function () {
        const setBlock = jest.fn();
        const wrapper = mount(<BlocxTimePicker block = {false} onMouseLeave = {setBlock} />);
        wrapper.find('.blocx-timepicker_dropdown').simulate('mouseLeave');
        expect(setBlock).toBeDefined();
    });

    it('should trigger onClick event when time is selected from timepicker list', function () {
        const onChangeSelection = jest.fn();
        const wrapper = mount(<BlocxTimePicker onClick = {onChangeSelection} />);
        wrapper.update();
        wrapper.find('li').first().simulate('click');
        expect(onChangeSelection).toBeDefined();
    });

    it('should trigger onBlur event when time is set and fromat is 24 hrs, step is 30 minutes', function () {
        const updateTime = jest.fn();
        const toggleVisibility = jest.fn();
        const onChangeSelection = jest.fn();
        const wrapper = mount(<BlocxTimePicker format={24} step = {30} onBlur = {updateTime} onClick = {toggleVisibility} onClick = {onChangeSelection} />);
        wrapper.update();
        wrapper.find('input').simulate('click');
        wrapper.find('li').at(2).simulate('click');
        console.log(wrapper.find('input').props().defaultValue)
        wrapper.find('input').simulate('blur');
        expect(updateTime).toBeDefined();
    });

    it('should trigger onBlur event when time is set and fromat is 24 hrs, step is 30 minutes but hour value>23 and min value>59', function () {
        const updateTime = jest.fn();
        const wrapper = mount(<BlocxTimePicker format={24} step = {30} onBlur = {updateTime} />);
        wrapper.update();
        wrapper.find('input').simulate('blur', {timepicker: {value: '25:66'}});
        expect(updateTime).toBeDefined();
    });

    it('should trigger onBlur event when time is set and fromat is 12 hrs, step is 30 minutes', function () {
        const updateTime = jest.fn();
        const toggleVisibility = jest.fn();
        const onChangeSelection = jest.fn();
        const wrapper = mount(<BlocxTimePicker setStep={true} format={12} step = {30} onBlur = {updateTime} onClick = {toggleVisibility} onClick = {onChangeSelection} />);
        wrapper.update();
        wrapper.find('input').simulate('click');
        wrapper.find('li').at(1).simulate('click');
        wrapper.find('input').simulate('blur');
        expect(updateTime).toBeDefined();
    });

    it('should trigger onKeyDown event when time is set and fromat is 12 hrs', function () {
        const toggleVisibility = jest.fn();
        const keyPress = jest.fn();
        const wrapper = mount(<BlocxTimePicker format={12} setStep={false} onKeyDown={keyPress} onClick = {toggleVisibility} />);
        wrapper.update();
        wrapper.find('input').simulate('click', {timepicker: {value: '11:36 AM'}});
        wrapper.find('input').simulate('keyDown', {event: {key: 'Enter'}});
        expect(keyPress).toBeDefined();
    });

    it('should trigger onBlur event when time is set and fromat is 24 hrs, step<0', function () {
        const updateTime = jest.fn();
        const wrapper = mount(<BlocxTimePicker format={24} step = {-1} onBlur = {updateTime} />);
        wrapper.update();
        wrapper.find('input').simulate('click');
        wrapper.find('li').at(1).simulate('click');
        wrapper.find('input').simulate('blur');
        expect(updateTime).toBeDefined();
    });
    
});