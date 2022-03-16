//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxBanner} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxBanner />', function () {

    it('renders correctly [BlocxBanner]', function () {
        const wrapper = renderer.create(<BlocxBanner />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxBanner component when banner position is `top-left`', function () {
        const wrapper = shallow(<BlocxBanner bannerPosition="top-left" />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxBanner component when banner position is `top-right`', function () {
        const wrapper = shallow(<BlocxBanner bannerPosition="top-right" />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxBanner component when banner position is `BOTTOM-LEFT`', function () {
        const wrapper = shallow(<BlocxBanner bannerPosition="BOTTOM-LEFT" />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxBanner component when banner position is `BOTTOM-RIGHT`', function () {
        const wrapper = shallow(<BlocxBanner bannerPosition="BOTTOM-RIGHT" />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxBanner component when banner position is `TOP-CENTER`', function () {
        const wrapper = shallow(<BlocxBanner bannerPosition="TOP-CENTER" />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxBanner component when banner position is `LEFT-CENTER`', function () {
        const wrapper = shallow(<BlocxBanner bannerPosition="LEFT-CENTER" />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxBanner component when banner position is `BOTTOM-CENTER`', function () {
        const wrapper = shallow(<BlocxBanner bannerPosition="BOTTOM-CENTER" />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxBanner component when banner position is `RIGHT-CENTER`', function () {
        const wrapper = shallow(<BlocxBanner bannerPosition="RIGHT-CENTER" />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxBanner component when banner position is `CENTER`', function () {
        const wrapper = shallow(<BlocxBanner bannerPosition="CENTER" />);
        expect(wrapper).toBeTruthy();
    });
});