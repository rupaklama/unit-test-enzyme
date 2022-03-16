//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BlocxCheckBox } from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxCheckBox />', function () {

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxCheckBox checked />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxCheckBox component', function () {
        const wrapper = shallow(<BlocxCheckBox />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxCheckBox component when disabled = {true}', function () {
        const wrapper = shallow(<BlocxCheckBox disabled />);
        expect(wrapper).toBeTruthy();
    });

    it('should should check the type: checkbox', function () {
        expect(BlocxCheckBox.defaultProps.type).toBe('checkbox');
    });

    it('should trigger onChange event when checked = {false}', function () {
        const handleChange = jest.fn();
        const wrapper = shallow(<BlocxCheckBox checked = {false} onChange = {handleChange} />);
        wrapper.find('input').simulate('change', {target: {checked:true}});
        expect(handleChange).toHaveBeenCalled();
    });

    it('should call handleChange when checkbox is clicked and disabled = {true}', () => {
        const handleChange = jest.fn();
        const onChange = jest.fn();
        const wrapper = shallow(<BlocxCheckBox disabled = {true} onChange = {onChange} handleChange = {handleChange} />);
        const input = wrapper.find('input');
        input.simulate('change');
        expect(onChange).not.toHaveBeenCalled();
    });

    it('should call handleChange when checkbox is clicked and checked = {true}, onChange = {true}', () => {
        const handleChange = jest.fn();
        const wrapper = shallow(<BlocxCheckBox checked = {true} onChange = {true} onChange = {handleChange} />);
        const input = wrapper.find('input');
        input.simulate('change', {target: {checked:true}, stopPropagation: () => {}, preventDefault: () => {}});
        expect(handleChange).toHaveBeenCalled();
    });

});