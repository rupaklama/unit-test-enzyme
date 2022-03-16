//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxSearch} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxSearch />', function () {

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxSearch />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxSearch component', function () {
        const wrapper = shallow(<BlocxSearch />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger click event when oneway search is done', function () {
        const handleRadioClick = jest.fn();
        const wrapper = shallow((<BlocxSearch onClick={handleRadioClick} />));
        wrapper.find('#oneway').simulate('click');
        expect(handleRadioClick).toBeDefined();
    });

    it('should trigger click event when twoway search is done', function () {
        const handleRadioClick = jest.fn();
        const wrapper = shallow((<BlocxSearch onClick={handleRadioClick} />));
        wrapper.find('#return').simulate('click');
        expect(handleRadioClick).toBeDefined();
    });

});