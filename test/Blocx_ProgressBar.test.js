//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BlocxProgressBar } from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxProgressBar />', function () {

    it('renders correctly [BlocxProgressBar]', function () {
        const wrapper = renderer.create(<BlocxProgressBar />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxProgressBar component', function () {
        const wrapper = shallow(<BlocxProgressBar />);
        expect(wrapper).toBeTruthy();
    });

});