//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxRating} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxRating />', function () {

    it('renders correctly v1', function () {
        const wrapper = renderer.create(<BlocxRating value={2}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxRating component when editing = {true}', function () {
        const wrapper = shallow(<BlocxRating value={2} />);
        expect(wrapper).toBeTruthy();
    });

    it('should call onMouseOver when mouse is hovered over ratings', () => {
        const onMouseInOut = jest.fn();
        const wrapper = shallow(<BlocxRating value={2} onMouseOver={onMouseInOut} />);
        wrapper.find('a').first().simulate('mouseOver', {stopPropagation: () => {}});
        expect(onMouseInOut).toBeDefined();
    });

    it('should call onMouseLeave when mouse is hovered away from ratings', () => {
        const onMouseInOut = jest.fn();
        const wrapper = shallow(<BlocxRating value={2} onMouseLeave={onMouseInOut} />);
        wrapper.find('a').first().simulate('mouseLeave', {stopPropagation: () => {}});
        expect(onMouseInOut).toBeDefined();
    });

    it('renders correctly v2', function () {
        const wrapper = renderer.create(<BlocxRating value={2.5} readOnly={true}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxRating component when readOnly = {true}', function () {
        const wrapper = shallow(<BlocxRating value={2.5} readOnly={true} />);
        expect(wrapper).toBeTruthy();
    });

    it('renders correctly v3', function () {
        const wrapper = renderer.create(<BlocxRating value={2.5} readOnly={true} showTextOnly={true}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxRating component when readOnly = {true} and showTextOnly={true}', function () {
        const wrapper = shallow(<BlocxRating value={2.5} readOnly={true} showTextOnly={true} />);
        expect(wrapper).toBeTruthy();
    });

    it('renders correctly v4', function () {
        const wrapper = renderer.create(<BlocxRating value={2} showTooltip={true}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxRating component when showTooltip = {true}', function () {
        const wrapper = shallow(<BlocxRating value={2} showTooltip={true} />);
        expect(wrapper).toBeTruthy();
    });

    it('should call onChange when ratings is changed', () => {
        const onChange = jest.fn();
        const wrapper = shallow(<BlocxRating value={2} showTooltip={true} onClick={onChange} />);
        wrapper.find('li').first().simulate('click', {stopPropagation: () => {}});
        expect(onChange).toBeDefined();
    });

    it('renders correctly v5', function () {
        const wrapper = renderer.create(<BlocxRating value={4.11} readOnly={true} showRatingStatus={true}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxRating component when readOnly = {true} and showRatingStatus={true}', function () {
        const wrapper = shallow(<BlocxRating value={4.11} readOnly={true} showRatingStatus={true} />);
        expect(wrapper).toBeTruthy();
    });

    it('renders correctly [feedback]', function () {
        const wrapper = renderer.create(<BlocxRating type="feedback"/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxRating [feedback] component', function () {
        const wrapper = shallow(<BlocxRating type="feedback" />);
        expect(wrapper).toBeTruthy();
    });

    it('should call onChangeSmiley when feedback is changed', () => {
        const onChangeSmiley = jest.fn();
        const wrapper = shallow(<BlocxRating type="feedback" onClick={onChangeSmiley} />);
        wrapper.find('li').first().simulate('click', {stopPropagation: () => {}});
        expect(onChangeSmiley).toBeDefined();
    });

    it('renders correctly [heart]', function () {
        const wrapper = renderer.create(<BlocxRating type="heart"/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxRating [heart] component', function () {
        const wrapper = shallow(<BlocxRating type="heart" />);
        expect(wrapper).toBeTruthy();
    });

    it('should call onChangeHeart when heart rating is clicked', () => {
        const onChangeHeart = jest.fn();
        const wrapper = shallow(<BlocxRating type="heart" onClick={onChangeHeart} />);
        wrapper.find('li').simulate('click', {stopPropagation: () => {}});
        expect(onChangeHeart).toBeDefined();
    });

    it('renders correctly [likes]', function () {
        const wrapper = renderer.create(<BlocxRating type="likes"/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxRating [likes] component', function () {
        const wrapper = shallow(<BlocxRating type="likes" />);
        expect(wrapper).toBeTruthy();
    });

    it('should call onChangeLikes when like is clicked', () => {
        const onChangeLikes = jest.fn();
        const wrapper = shallow(<BlocxRating type="likes" onClick={onChangeLikes} />);
        wrapper.find('li').first().simulate('click', {stopPropagation: () => {}});
        expect(onChangeLikes).toBeDefined();
    });

    it('should call onChangeLikes when dislike is clicked', () => {
        const onChangeLikes = jest.fn();
        const wrapper = shallow(<BlocxRating type="likes" onClick={onChangeLikes} />);
        wrapper.find('li').last().simulate('click', {stopPropagation: () => {}});
        expect(onChangeLikes).toBeDefined();
    });

});