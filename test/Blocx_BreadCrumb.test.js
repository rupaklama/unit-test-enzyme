//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BlocxBreadCrumb } from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxBreadCrumb />', function () {

    const items = [
        {"id":"0","value": "list1", "label": "list1","url":"#/"},
        {"id":"1","value": "list2", "label": "list2","url":"#/"},
        {"id":"2","value": "list3", "label": "list3","url":"#/"}
    ]

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxBreadCrumb data = {items} disabled={false} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly when disabled = {true}', function () {
        const wrapper = renderer.create(<BlocxBreadCrumb data = {items} disabled={true} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have Blocx_BreadCrumb component', function () {
        const wrapper = shallow(<BlocxBreadCrumb data = {items} disabled={false} />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger onCkick event when item clicked', function () {
        const itemClick = jest.fn();
        const wrapper = shallow(<BlocxBreadCrumb data = {items} onClick={itemClick} disabled={false} />);
        wrapper.find('a').first().simulate('click');
        expect(itemClick).toHaveBeenCalled();
    });

    it('should trigger onCkick event when item clicked and disabled = {true}', function () {
        const itemClick = jest.fn();
        const wrapper = shallow(<BlocxBreadCrumb data = {items} onClick={itemClick} disabled={true} />);
        wrapper.find('a').first().simulate('click');
        expect(itemClick).not.toHaveBeenCalled();
    });
});