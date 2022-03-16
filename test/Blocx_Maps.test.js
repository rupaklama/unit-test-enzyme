//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxMap} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxMap />', function () {

    it('renders correctly [BlocxMap]', function () {
        const wrapper = renderer.create(<BlocxMap />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxMap component', function () {
        const wrapper = shallow(<BlocxMap />);
        expect(wrapper).toBeTruthy();
    });

    it('invokes `componentDidMount` when mounted', function () {
        jest.spyOn(BlocxMap.prototype, 'componentDidMount');
        mount(<BlocxMap />);
        expect(BlocxMap.prototype.componentDidMount).toBeDefined();
        BlocxMap.prototype.componentDidMount.mockRestore();
    });
});