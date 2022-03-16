//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BlocxRadioButton, BlocxRadioGroup } from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxRadioButton />', function () {

    it('renders correctly [BlocxRadioButton]', function () {
        const wrapper = renderer.create(<BlocxRadioGroup name = "test123"><BlocxRadioButton /></BlocxRadioGroup>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxRadioButton component', function () {
        const wrapper = shallow(<BlocxRadioGroup name = "test123"><BlocxRadioButton /></BlocxRadioGroup>);
        expect(wrapper).toBeTruthy();
    });

});