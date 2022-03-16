//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxCounter} from 'blocx-react-components'

configure({adapter: new Adapter()});
describe('<BlocxCounter />', function () {
    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxCounter value={234} minDigit = {4} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should verify BlocxCounter component if the count value is lessthan 4 digits', function () {
        const wrapper = shallow(<BlocxCounter value={234} minDigit = {4} />);
        expect(wrapper).toBeTruthy();
    });

    it('should have Blocx_ContentContainer component if the count value is greaterthan 4 digits', function () {
        const wrapper = shallow(<BlocxCounter value={234678} />);
        expect(wrapper).toBeTruthy();
    });
});