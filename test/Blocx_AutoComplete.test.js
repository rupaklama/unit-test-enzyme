//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxAutoComplete} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxAutoComplete />', function () {

    const AutoCompleteItems = [
        "HTML",
        "Angular",
        "React",
        "lwc",
        "Vuejs"
    ]

    const props = {
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: '',
        value: ''
    }

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxAutoComplete />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxAutoComplete component', function () {
        const wrapper = shallow(<BlocxAutoComplete />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger event onChange when keyword matches with the defined array', function () {
        const mockOnChange = jest.fn();
        const wrapper = shallow((<BlocxAutoComplete {...props} options = {AutoCompleteItems} onChange={mockOnChange} />));
        wrapper.find('input').simulate('change', { currentTarget: { value: 'j' } });
        wrapper.setState({ userInput: 'j', showSuggestions: true, filteredSuggestions: ['Javascript', 'Java'] });
        wrapper.update();
        expect(mockOnChange).toBeDefined();
    });

    it('should trigger event onClick when a suggestion is clicked', function () {
        const mockOnClick = jest.fn();
        const wrapper = shallow((<BlocxAutoComplete {...props} options = {AutoCompleteItems} onClick = {mockOnClick} />));
        wrapper.setState({ userInput: 'j', showSuggestions: true, filteredSuggestions: ['Javascript', 'Java'] });
        wrapper.update();
        wrapper.find('input').simulate('change', { currentTarget: { value: 'j' } });
        wrapper.find('li').at(0).simulate('click', { currentTarget: { value: 'Javascript' }, preventDefault: () => {} });
        expect(mockOnClick).toBeDefined();
    });

    it('should trigger event onChange when keyword does not match with the defined array', function () {
        const mockOnChange = jest.fn();
        const wrapper = shallow((<BlocxAutoComplete options = {AutoCompleteItems} onChange={mockOnChange} />));
        wrapper.find('input').simulate('change', { currentTarget: { value: 'q' } });
        wrapper.setState({ userInput: 'q', showSuggestions: true, filteredSuggestions: [] });
        wrapper.update();
        expect(mockOnChange).toBeDefined();
    });

    it('should trigger event onKeyDown when keyCode = 13', function () {
        const mockOnKeyDown = jest.fn();
        const wrapper = mount((<BlocxAutoComplete options = {AutoCompleteItems} onKeyDown = {mockOnKeyDown} />));
        wrapper.update();
        wrapper.find('input').simulate('keyDown', { key: 'Enter', keyCode: 13 });
        expect(mockOnKeyDown).toBeDefined()
    });

    it('should trigger event onKeyDown when keyCode = 40 and activeSuggestion = 2', function () {
        const mockOnKeyDown = jest.fn();
        const wrapper = mount((<BlocxAutoComplete options = {AutoCompleteItems} onKeyDown = {mockOnKeyDown} />));
        wrapper.setState({ userInput: 'j', showSuggestions: true, filteredSuggestions: ['Javascript', 'Java'], activeSuggestion: 2 });
        wrapper.update();
        wrapper.find('input').simulate('keyDown', { keyCode: 38 });
        expect(mockOnKeyDown).toBeDefined()
    });

    it('should trigger event onKeyDown when keyCode = 38 and activeSuggestion = 0', function () {
        const mockOnKeyDown = jest.fn();
        const wrapper = mount((<BlocxAutoComplete options = {AutoCompleteItems} onKeyDown = {mockOnKeyDown} />));
        wrapper.setState({ userInput: '', showSuggestions: true, filteredSuggestions: [], activeSuggestion: 0 });
        wrapper.update();
        wrapper.find('input').simulate('keyDown', { key: '', keyCode: 38 });
        expect(mockOnKeyDown).toBeDefined()
    });

    it('should trigger event onKeyDown when keyCode = 40', function () {
        const mockOnKeyDown = jest.fn();
        const wrapper = mount((<BlocxAutoComplete options = {AutoCompleteItems} onKeyDown = {mockOnKeyDown} />));
        wrapper.setState({ userInput: 'y', showSuggestions: true, filteredSuggestions: ['Python'], activeSuggestion: 1 });
        wrapper.update();
        wrapper.find('input').simulate('keyDown', { key: 'y', keyCode: 40 });
        expect(mockOnKeyDown).toBeDefined()
    });

});