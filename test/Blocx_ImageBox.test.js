//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxImageBox} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxImageBox />', function () {

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxImageBox />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxImageBox component', function () {
        const wrapper = shallow(<BlocxImageBox />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger onClick event', function () {
        const onClick = jest.fn();
        const wrapper = shallow(<BlocxImageBox onClick={onClick} />);
        wrapper.find('img').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
});