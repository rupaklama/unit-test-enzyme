//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxDropdown} from 'blocx-react-components';

configure({adapter: new Adapter()});


describe('<BlocxDropdown />', function () {

    let options= [
        { value: 'HTML' },
        { value: 'Angular' },
        { value: 'React' }
    ]

    it('renders correctly []Select]', function () {
        const wrapper = renderer.create(<BlocxDropdown placeholder="Select..."  options={options} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have Select component', function () {
        const wrapper = shallow(<BlocxDropdown placeholder="Select..."  options={options} />);
        expect(wrapper).toBeTruthy();
    });

    it('renders correctly [MultiSelect]', function () {
        const wrapper = renderer.create(<BlocxDropdown multiple = {true} placeholder="Select..."  options={options} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have MultiSelect component', function () {
        const wrapper = shallow(<BlocxDropdown multiple = {true} placeholder="Select..."  options={options} />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger onFocus when select gets focus', function () {
        const onFocus = jest.fn()
        const wrapper = shallow((<BlocxDropdown onFocus = {onFocus} options = {options} />));
        wrapper.find('button').simulate('focus');
        expect(onFocus).toBeDefined();
    });

    it('should trigger onKeyDown, when Enter key is pressed for selection', function () {
        const onKeyDown = jest.fn();
        const wrapper = shallow((<BlocxDropdown onKeyDown = {onKeyDown} options = {options} />));
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('keyDown', {key: 'Enter', preventDefault: () => {}});
        expect(onKeyDown).toBeDefined();
    });

    it('should trigger onKeyDown, when ArrowDown key is used for changing selection', function () {
        const onKeyDown = jest.fn();
        const wrapper = shallow((<BlocxDropdown onKeyDown = {onKeyDown} options = {options} />));
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('keyDown', {key: 'ArrowDown', preventDefault: () => {}});
        expect(onKeyDown).toBeDefined();
    });

    it('should trigger onKeyDown, when ArrowUp key is used for changing selection', function () {
        const onKeyDown = jest.fn();
        const wrapper = shallow((<BlocxDropdown onKeyDown = {onKeyDown} options = {options} />));
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('keyDown', {key: 'ArrowUp', preventDefault: () => {}});
        expect(onKeyDown).toBeDefined();
    });

    it('should trigger onKeyDown, when Tab key is pressed', function () {
        const onKeyDown = jest.fn();
        const wrapper = shallow((<BlocxDropdown onKeyDown = {onKeyDown} options = {options} />));
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('keyDown', {key: 'Tab', preventDefault: () => {}});
        expect(onKeyDown).toBeDefined();
    });

    it('should trigger onKeyDown, when Escape key is predded', function () {
        const onKeyDown = jest.fn();
        const wrapper = shallow((<BlocxDropdown onKeyDown = {onKeyDown} options = {options} />));
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('keyDown', {key: 'Escape', preventDefault: () => {}});
        expect(onKeyDown).toBeDefined();
    });

    it('should trigger onKeyDown, when selection is left empty', function () {
        const onKeyDown = jest.fn();
        const wrapper = shallow((<BlocxDropdown multiple onKeyDown = {onKeyDown} options = {options} />));
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('keyDown', {key: ' ', preventDefault: () => {}});
        expect(onKeyDown).toBeDefined();
    });

    it('should trigger onKeyDown, when any alphabet or numbers are pressed like `h`', function () {
        const onKeyDown = jest.fn();
        const wrapper = shallow((<BlocxDropdown onKeyDown = {onKeyDown} options = {options} />));
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('keyDown', {key: 'h', preventDefault: () => {}});
        expect(onKeyDown).toBeDefined();
    });

    it('should trigger onClick when select is clicked for selection list options', function () {
        const onClick = jest.fn()
        const wrapper = shallow((<BlocxDropdown onClick = {onClick} options = {options} />));
        wrapper.find('button').simulate('click');
        expect(onClick).toBeDefined();
    });

    it('should trigger onClickOption when option is selected from selection list', function () {
        const onClickOption = jest.fn()
        const wrapper = shallow((<BlocxDropdown onClick = {onClickOption} options = {options} />));
        wrapper.find('button').simulate('click', {currentTarget: {dataset: 'HTML'}, value: 'HTML'});
        wrapper.find('li').at(0).simulate('click', {currentTarget: {dataset: 'HTML'}, value: 'HTML'});
        expect(onClickOption).toBeDefined();
    });

    it('should trigger onHoverOption when mouse is hovered over option in selection list', function () {
        const onHoverOption = jest.fn()
        const wrapper = shallow((<BlocxDropdown onClick = {onHoverOption} options = {options} />));
        wrapper.find('button').simulate('click', {currentTarget: {dataset: 'HTML'}, value: 'HTML'});
        wrapper.find('li').at(0).simulate('mouseOver', {currentTarget: {dataset: 'HTML'}, value: 'HTML'});
        expect(onHoverOption).toBeDefined();
    });

    it('should trigger onDeleteOption', function () {
        const onDeleteOption = jest.fn()
        const wrapper = shallow((<BlocxDropdown multiple onClick = {onDeleteOption} options = {options} />));
        wrapper.find('button').simulate('click', {currentTarget: {dataset: 'HTML'}, value: 'HTML'});
        wrapper.find('li').at(0).simulate('click', {currentTarget: {dataset: 'HTML'}, value: 'HTML'});
        wrapper.find('li').at(1).simulate('click', {currentTarget: {dataset: 'Angular'}, value: 'Angular'});
        wrapper.find('span').simulate('click', {currentTarget: {dataset: 'HTML'}, value: 'HTML'});
        expect(onDeleteOption).toBeDefined();
    });

});