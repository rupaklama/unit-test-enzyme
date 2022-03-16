//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxDivider} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxDivider />', function () {

    it('renders correctly [BlocxDivider], type="horizontal"', function () {
        const wrapper = renderer.create(<BlocxDivider height={2}
            widthInPer={true}
            width={100}
            color="#A6ADB4"
            type="horizontal" />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly [BlocxDivider], type="vertical"', function () {
        const wrapper = renderer.create(<BlocxDivider height={100}
            width={10}
            color="#A6ADB4"
            type="vertical" />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxDivider component, type="horizontal"', function () {
        const wrapper = shallow(<BlocxDivider height={2}
            widthInPer={true}
            width={100}
            color="#A6ADB4"
            type="horizontal" />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxDivider component, type="vertical"', function () {
        const wrapper = shallow(<BlocxDivider height={100}
            width={10}
            color="#A6ADB4"
            type="vertical" />);
        expect(wrapper).toBeTruthy();
    });

});