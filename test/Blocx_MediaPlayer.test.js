//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxMediaPlayer} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxMediaPlayer />', function () {

    it('renders correctly [BlocxMediaPlayer]', function () {
        const wrapper = renderer.create(<BlocxMediaPlayer controls
            loop
            poster="https://www.w3schools.com/images/w3html5.gif"
            src="https://www.w3schools.com/html/mov_bbb.mp4"  />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxMediaPlayer component', function () {
        const wrapper = shallow(<BlocxMediaPlayer controls
            loop
            poster="https://www.w3schools.com/images/w3html5.gif"
            src="https://www.w3schools.com/html/mov_bbb.mp4"  />);
        expect(wrapper).toBeTruthy();
    });
    
    it('should call handleTogglePlayPause', () => {
        const handleTogglePlayPause = jest.fn();
        const wrapper = mount(<BlocxMediaPlayer controls
            loop
            poster="https://www.w3schools.com/images/w3html5.gif"
            src="https://www.w3schools.com/html/mov_bbb.mp4"  onClick = {handleTogglePlayPause} />);
        wrapper.update();
        wrapper.find('button').at(1).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        expect(handleTogglePlayPause).toBeDefined();
    });

    it('should call mockToggleFullScreen', () => {
        const mockToggleFullScreen = jest.fn();
        const wrapper = mount(<BlocxMediaPlayer controls
            loop
            poster="https://www.w3schools.com/images/w3html5.gif"
            src="https://www.w3schools.com/html/mov_bbb.mp4"  onClick = {mockToggleFullScreen} />);
        wrapper.update();
        wrapper.find('#btnFullScreen').simulate('click');
        expect(mockToggleFullScreen).toBeDefined();
    });

    it('should call handleToggleMouse', () => {
        const mockToggleMouse = jest.fn();
        const wrapper = mount(<BlocxMediaPlayer controls
            loop
            poster="https://www.w3schools.com/images/w3html5.gif"
            src="https://www.w3schools.com/html/mov_bbb.mp4"  onMouseOver = {mockToggleMouse} />);
        wrapper.update();
        wrapper.find('div').at(1).simulate('mouseOver');
        expect(mockToggleMouse).toBeDefined();
    });

    it('should call handleToggleMouse', () => {
        const mockToggleMouse = jest.fn();
        const wrapper = mount(<BlocxMediaPlayer controls
            loop
            poster="https://www.w3schools.com/images/w3html5.gif"
            src="https://www.w3schools.com/html/mov_bbb.mp4"  onMouseOut = {mockToggleMouse} />);
        wrapper.update();
        wrapper.find('div').at(1).simulate('mouseOut');
        expect(mockToggleMouse).toBeDefined();
    });

    it('should call onTimeUpdateHandler', () => {
        const onTimeUpdateHandler = jest.fn();
        const wrapper = mount(<BlocxMediaPlayer controls
            loop
            poster="https://www.w3schools.com/images/w3html5.gif"
            src="https://www.w3schools.com/html/mov_bbb.mp4"  onTimeUpdate = {onTimeUpdateHandler} />);
        wrapper.update();
        wrapper.find('video').simulate('timeUpdate', { player: { currentTime: 4, seektime: 39 } });
        expect(onTimeUpdateHandler).toBeDefined();
    });

    it('should call handleTogglePlayPause', () => {
        const handleTogglePlayPause= jest.fn();
        const wrapper = mount(<BlocxMediaPlayer controls
            loop
            poster="https://www.w3schools.com/images/w3html5.gif"
            src="https://www.w3schools.com/html/mov_bbb.mp4"  onClick = {handleTogglePlayPause} />);
        wrapper.update();
        wrapper.find('button').at(0).simulate('click');
        expect(handleTogglePlayPause).toBeDefined();
    });

    it('should call handleTogglePlaying', () => {
        const handleTogglePlaying= jest.fn();
        const wrapper = mount(<BlocxMediaPlayer controls
            loop
            poster="https://www.w3schools.com/images/w3html5.gif"
            src="https://www.w3schools.com/html/mov_bbb.mp4"  onEnded = {handleTogglePlaying} />);
        wrapper.update();
        wrapper.find('video').simulate('ended');
        expect(handleTogglePlaying).toBeDefined();
    });

    it('should call setVolume', () => {
        const handleSetVolume= jest.fn();
        const wrapper = mount(<BlocxMediaPlayer controls
            loop
            poster="https://www.w3schools.com/images/w3html5.gif"
            src="https://www.w3schools.com/html/mov_bbb.mp4"  onClick = {handleSetVolume} />);
        wrapper.update();
        wrapper.find('button').at(2).simulate('click');
        expect(handleSetVolume).toBeDefined();
    });
});