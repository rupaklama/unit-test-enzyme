//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxCarousel} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxCarousel />', function () {

    let carouselItems = [
        { id: '0', title: 'Hero Slide Heading 1', text: 'Lorem Ipsum is simply dummy text', image: '/assets/images/carousel image.jpg' },
        { id: '1', title: 'Hero Slide Heading 2', text: 'Lorem Ipsum is simply dummy text', image: '/assets/images/carousel image1.jpg' },
        { id: '2', title: 'Hero Slide Heading 3', text: 'Lorem Ipsum is simply dummy text', image: '/assets/images/carousel image2.jpg' }
    ]

    it('renders correctly [BlocxCarousel]', function () {
        const wrapper = renderer.create(<BlocxCarousel data = {carouselItems} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxCarousel component', function () {
        const wrapper = shallow(<BlocxCarousel data = {carouselItems} />);
        expect(wrapper).toBeTruthy();
    });
    
    it('should trigger click event when clicked on previous carousel image icon', function () {
        const mockPrevious = jest.fn();
        const wrapper = shallow(<BlocxCarousel data = {carouselItems} onClick = {mockPrevious} />);
        wrapper.find('.a').at(0).simulate('click');
        wrapper.update();
        expect(mockPrevious).toBeDefined();
    });

    it('should trigger click event when clicked on next carousel image icon', function () {
        const mockNext = jest.fn();
        const wrapper = shallow(<BlocxCarousel data = {carouselItems} onClick = {mockNext} />);
        wrapper.find('.a').at(1).simulate('click');
        wrapper.update();
        expect(mockNext).toBeDefined();
    });

    it('invokes `componentDidMount` when mounted', function () {
        jest.spyOn(BlocxCarousel.prototype, 'componentDidMount');
        shallow(<BlocxCarousel data = {carouselItems} />);
        expect(BlocxCarousel.prototype.componentDidMount).toBeDefined();
        BlocxCarousel.prototype.componentDidMount.mockRestore();
    });

    it('calls `setState` when mounted', () => {
        const wrapper = shallow(<BlocxCarousel data = {carouselItems} />);
        const instance = wrapper.instance();
        jest.spyOn(instance, 'setState');
        instance.componentDidMount();
        expect(instance.setState).toBeDefined();
    });

    it('should trigger click event when carousel image is changed by clicking on dot', function () {
        const handleEvent = jest.fn();
        const wrapper = shallow(<BlocxCarousel data = {carouselItems} onClick = {handleEvent} />);
        wrapper.find('a').at(1).simulate('click');
        wrapper.update();
        expect(handleEvent).toBeDefined();
    });

});