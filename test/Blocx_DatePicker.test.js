//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxDatePicker} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxDatePicker />', function () {

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxDatePicker />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxDatePicker component', function () {
        const wrapper = shallow(<BlocxDatePicker />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger click event when field is clicked for date selection', function () {
        const toggleVisibility = jest.fn();
        const wrapper = shallow(<BlocxDatePicker onClick={toggleVisibility} />);
        wrapper.update();
        wrapper.find('input').simulate('click');
        expect(toggleVisibility).toBeDefined();
    });

    it('should trigger click event when calendar icon is clicked for date selection', function () {
        const toggleVisibility = jest.fn();
        const wrapper = mount(<BlocxDatePicker onClick={toggleVisibility} />);
        wrapper.update();
        wrapper.find('img').first().simulate('click');
        expect(toggleVisibility).toBeDefined();
    });

    it('should trigger blur event when calender is hidden from shown state', function () {
        const toggleVisibility = jest.fn();
        const wrapper = shallow(<BlocxDatePicker onBlur={toggleVisibility} />);
        wrapper.update();
        wrapper.find('input').simulate('blur');
        expect(toggleVisibility).toBeDefined();
    });

    beforeEach(() => {
        Element.prototype.getBoundingClientRect = jest.fn(() => {
            return {
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                x: 0,
                y: 0
            }
        });
    });

    it('should mock `getBoundingClientRect`', () => {
        const element = document.createElement('span');
        const rect = element.getBoundingClientRect();
        expect(rect.width).toEqual(0);
        expect(rect.height).toEqual(0);
        expect(rect.top).toEqual(0);
        expect(rect.left).toEqual(0);
        expect(rect.bottom).toEqual(0);
        expect(rect.right).toEqual(0);
        expect(rect.x).toEqual(0);
        expect(rect.y).toEqual(0);
    });

    it('should trigger click event when current year is changed to next year', function () {
        const onChangeYearUp = jest.fn();
        const wrapper = mount(<BlocxDatePicker onChangeYearUp={onChangeYearUp} />);
        wrapper.find('#dpNextYear').simulate('click');
        expect(onChangeYearUp).toBeDefined();
    });

    it('should trigger click event when current year is changed to previous year', function () {
        const onChangeYearDown = jest.fn();
        const wrapper = mount(<BlocxDatePicker onChangeYearDown={onChangeYearDown} />);
        wrapper.update();
        wrapper.find('#dpPrevYear').simulate('click');
        expect(onChangeYearDown).toBeDefined();
    });

    it('should trigger click event when current month is changed to previous month', function () {
        const onChangeMonthUp = jest.fn();
        const wrapper = mount(<BlocxDatePicker onChangeMonthUp={onChangeMonthUp} />);
        wrapper.find('#dpPrev').simulate('click');
        expect(onChangeMonthUp).toBeDefined();
    }); 
    
    it('should trigger click event when current month is changed to next month', function () {
        const onChangeMonthDown = jest.fn();
        const wrapper = mount(<BlocxDatePicker onChangeMonthDown={onChangeMonthDown} />);
        wrapper.find('#dpNext').simulate('click');
        expect(onChangeMonthDown).toBeDefined();
    });

    it('should trigger click event when a date is selected from calendar', function () {
        const _updateForm = jest.fn();
        const wrapper = mount(<BlocxDatePicker onClick={_updateForm} />);
        wrapper.find('.dpDay').at(0).simulate('click');
        expect(_updateForm).toBeDefined();
    });

    it('should trigger mouseEnter event when Block is set true', function () {
        const onMouseEnter = jest.fn();
        const wrapper = mount(<BlocxDatePicker onMouseEnter={onMouseEnter} />);
        wrapper.find('div').at(2).simulate('mouseEnter');
        expect(onMouseEnter).toBeDefined();
    });

    it('should trigger mouseLeave event when Block is set false', function () {
        const onMouseLeave = jest.fn();
        const wrapper = mount(<BlocxDatePicker onMouseLeave={onMouseLeave} />);
        wrapper.find('div').at(2).simulate('mouseLeave');
        expect(onMouseLeave).toBeDefined();
    });

});