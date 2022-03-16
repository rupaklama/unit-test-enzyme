//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BlocxHero , BlocxHeroBody, BlocxHeroCarousel } from 'blocx-react-components';


configure({adapter: new Adapter()});

describe('<BlocxHeroCarousel />', function () {

    let carouselItems = [
        { id: '0', title: 'Hero Slide Heading 1', text: 'Lorem Ipsum is simply dummy text', image: '/assets/images/carousel image.jpg' },
        { id: '1', title: 'Hero Slide Heading 2', text: 'Lorem Ipsum is simply dummy text', image: '/assets/images/carousel image1.jpg' },
        { id: '2', title: 'Hero Slide Heading 3', text: 'Lorem Ipsum is simply dummy text', image: '/assets/images/carousel image2.jpg' }
    ]

    it('renders correctly[BlocxHeroCarousel]', function () {
        const wrapper = renderer.create(<BlocxHeroCarousel data = {carouselItems} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxHeroCarousel component', function () {
        const wrapper = shallow(<BlocxHeroCarousel data = {carouselItems} />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger click event when previous hero image is opened', function () {
        const mockPrevious = jest.fn();
        const wrapper = shallow(<BlocxHeroCarousel data = {carouselItems} onClick = {mockPrevious} />);
        wrapper.find('.blocx-slider_navigation-leftbtn').simulate('click', {preventDefault: () => {}});
        wrapper.update();
        expect(mockPrevious).toBeDefined();
    });

    it('should trigger click event when all image from previous hero image is opened', function () {
        const mockPrevious = jest.fn();
        const wrapper = shallow(<BlocxHeroCarousel data = {carouselItems} onClick = {mockPrevious} />);
        wrapper.find('.blocx-slider_navigation-leftbtn').simulate('click', {preventDefault: () => {}});
        wrapper.find('.blocx-slider_navigation-leftbtn').simulate('click', {preventDefault: () => {}});
        wrapper.find('.blocx-slider_navigation-leftbtn').simulate('click', {preventDefault: () => {}});
        wrapper.update();
        expect(mockPrevious).toBeDefined();
    });


    it('should trigger click event when next hero image is opened', function () {
        const mockNext = jest.fn();
        const wrapper = shallow(<BlocxHeroCarousel data = {carouselItems} onClick = {mockNext} />);
        wrapper.find('.blocx-slider_navigation-rightbtn').simulate('click', {preventDefault: () => {}});
        wrapper.update();
        expect(mockNext).toBeDefined();
    });

    it('should trigger click event when all image from next hero image is opened', function () {
        const mockNext = jest.fn();
        const wrapper = shallow(<BlocxHeroCarousel data = {carouselItems} onClick = {mockNext} />);
        wrapper.find('.blocx-slider_navigation-rightbtn').simulate('click', {preventDefault: () => {}});
        wrapper.find('.blocx-slider_navigation-rightbtn').simulate('click', {preventDefault: () => {}});
        wrapper.find('.blocx-slider_navigation-rightbtn').simulate('click', {preventDefault: () => {}});
        wrapper.update();
        expect(mockNext).toBeDefined();
    });

    it('invokes `componentDidMount` when mounted', function () {
        jest.spyOn(BlocxHeroCarousel.prototype, 'componentDidMount');
        shallow(<BlocxHeroCarousel data = {carouselItems} />);
        expect(BlocxHeroCarousel.prototype.componentDidMount).toBeDefined();
        BlocxHeroCarousel.prototype.componentDidMount.mockRestore();
    });

    it('calls `setState` when mounted', () => {
        const wrapper = shallow(<BlocxHeroCarousel data = {carouselItems} />);
        const instance = wrapper.instance();
        jest.spyOn(instance, 'setState');
        instance.componentDidMount();
        expect(instance.setState).toBeDefined();
    });

});

describe('<BlocxHero />', function () {

    it('renders correctly[BlocxHero]', function () {
        const wrapper = renderer.create(<BlocxHero />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxHero component', function () {
        const wrapper = shallow(<BlocxHero />);
        expect(wrapper).toBeTruthy();
    });

});

describe('<BlocxHeroBody />', function () {

    it('renders correctly[BlocxHeroBody]', function () {
        const wrapper = renderer.create(<BlocxHeroBody />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxHeroBody component', function () {
        const wrapper = shallow(<BlocxHeroBody />);
        expect(wrapper).toBeTruthy();
    });

});
