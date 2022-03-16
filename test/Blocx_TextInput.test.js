//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BlocxTextInput } from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxTextInput />', function () {

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxTextInput />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxTextInput component', function () {
        const wrapper = shallow(<BlocxTextInput />);
        expect(wrapper).toBeTruthy();
    });

    it('should have input tag', function () {
        const wrapper = shallow(<BlocxTextInput />);
        expect(wrapper.find('input')).toBeTruthy();
    });

    it('should call onKeyUp', () => {
        const onKeyUp = jest.fn();
        const wrapper = shallow(<BlocxTextInput onKeyUp = {onKeyUp} />);
        wrapper.find('input').simulate('keyUp', {target: {value: 'a'}});
        expect(onKeyUp).toHaveBeenCalled();
    });

    it('should call onKeyDown', () => {
        const onKeyDown = jest.fn();
        const wrapper = shallow(<BlocxTextInput onKeyDown = {onKeyDown} />);
        wrapper.find('input').simulate('keyDown', {target: {value: 'a'}});
        expect(onKeyDown).toHaveBeenCalled();
    });

    it('should call onKeyPress', () => {
        const onKeyPress = jest.fn();
        const wrapper = shallow(<BlocxTextInput onKeyPress = {onKeyPress} />);
        wrapper.find('input').simulate('keyPress', {target: {value: 'a'}});
        expect(onKeyPress).toHaveBeenCalled();
    });

    it('should call onFocus', () => {
        const onFocus = jest.fn();
        const wrapper = shallow(<BlocxTextInput onFocus = {onFocus} />);
        wrapper.find('input').simulate('focus', {target: {value: 'a'}});
        expect(onFocus).toHaveBeenCalled();
    });

    it('should call onBlur', () => {
        const onBlur = jest.fn();
        const wrapper = shallow(<BlocxTextInput onBlur = {onBlur} />);
        wrapper.find('input').simulate('blur', {target: {value: 'a'}});
        expect(onBlur).toHaveBeenCalled();
    });
});