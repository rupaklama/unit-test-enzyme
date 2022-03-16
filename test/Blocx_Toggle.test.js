//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BlocxToggle } from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxToggle />', function () {

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxToggle checked></BlocxToggle>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxToggle component', function () {
        const wrapper = shallow(<BlocxToggle />);
        expect(wrapper).toBeTruthy();
    });

    it('label to have class as disabled', function () {
        const wrapper = shallow(<BlocxToggle disabled />);
        expect(wrapper.find('label').hasClass('disabled')).toBeTruthy();
    });

    it('check the defined functions: onBlur, onFocus, onChange', function () {
        expect(BlocxToggle.defaultProps.onBlur).toBeDefined();
        expect(BlocxToggle.defaultProps.onChange).toBeDefined();
        expect(BlocxToggle.defaultProps.onFocus).toBeDefined();
    });

    it('should call handleChange when toggle button is clicked', () => {
        const handleChangeMock = jest.fn();
        const onChange = jest.fn();
        const wrapper = shallow(<BlocxToggle onChange = {onChange} handleChange = {handleChangeMock} />);
        const input = wrapper.find('input');
        input.simulate('change', {target: {checked: true}});
        expect(onChange).toHaveBeenCalled();
    });

    it('should call handleChange when toggle button is clicked and disabled = {true}', () => {
        const handleChangeMock = jest.fn();
        const onChange = jest.fn();
        const wrapper = shallow(<BlocxToggle disabled = {true} onChange = {onChange} handleChange = {handleChangeMock} />);
        const input = wrapper.find('input');
        input.simulate('change', {target: {checked: true}});
        expect(onChange).not.toHaveBeenCalled();
    });

    it('should trigger onFocus event', function () {
        const wrapper = shallow(<BlocxToggle/>);
        const element = wrapper.instance();
        jest.spyOn(element, 'focus')
        wrapper.simulate('change');
        setTimeout(() => expect(element.focus).toHaveBeenCalled(), 250);
    });

    it('should call handleChange when toggle button is clicked', () => {
        const handleChangeMock = jest.fn();
        const onChange = jest.fn();
        const wrapper = shallow(<BlocxToggle checked = {false} onChange = {onChange} handleChange = {handleChangeMock} />);
        const input = wrapper.find('input');
        input.simulate('change', {target: {checked: true}});
        expect(onChange).toHaveBeenCalled();
    });

});
