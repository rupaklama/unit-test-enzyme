//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxPagination} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxPagination />', function () {

  it('renders correctly', function () {
    const wrapper = renderer.create(<BlocxPagination initialPage={1} totalPages={8} />).toJSON();
    expect(wrapper).toMatchSnapshot();
});

it('should have BlocxPagination component', function () {
    const wrapper = shallow(<BlocxPagination initialPage={1} totalPages={8} />);
    expect(wrapper).toBeTruthy();
});

it('should trigger handleClick when a page number is clicked', function () {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<BlocxPagination initialPage={1} totalPages={8} onClick={mockCallBack} />);
    wrapper.find('a').at(0).simulate('click', {preventDefault: () => {}});
    expect(mockCallBack).toHaveBeenCalled();
});

it('should trigger handleClick when previous button is clicked', function () {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<BlocxPagination initialPage={1} totalPages={8} onClick={mockCallBack} />);
    wrapper.find('a').at(8).simulate('click', {preventDefault: () => {}});
    expect(mockCallBack).toBeDefined();
});

it('should trigger handleClick when previous button is clicked, initialPage > 1', function () {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<BlocxPagination initialPage={3} totalPages={8} onClick={mockCallBack} />);
    wrapper.find('a').at(8).simulate('click', {preventDefault: () => {}});
    expect(mockCallBack).toHaveBeenCalled();
});

it('should trigger handleClick when next button is clicked', function () {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<BlocxPagination initialPage={1} totalPages={8} onClick={mockCallBack} />);
    wrapper.find('a').last().simulate('click', {preventDefault: () => {}});
    expect(mockCallBack).toHaveBeenCalled();
});
});
