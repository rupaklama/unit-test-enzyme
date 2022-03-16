//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxLoader} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxLoader />', function () {

    it('renders correctly[BlocxLoader]', function () {
        const wrapper = renderer.create(<BlocxLoader />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxLoader component', function () {
        const wrapper = shallow(<BlocxLoader />);
        expect(wrapper).toBeTruthy();
    });

});