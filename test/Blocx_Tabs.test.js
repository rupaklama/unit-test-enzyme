//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BlocxTab ,BlocxTabContent , BlocxTabContentItem, BlocxTabLabel, BlocxTabNav } from 'blocx-react-components'

configure({adapter: new Adapter()});

describe('<BlocxTab />', function () {

    it('renders correctly [BlocxTab]', function () {
        const wrapper = renderer.create(<BlocxTab/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxTab component', function () {
        const wrapper = shallow(<BlocxTab/>);
        expect(wrapper).toBeTruthy();
    });
    
});

describe('<BlocxTabContent />', function () {

    it('renders correctly [BlocxTabContent]', function () {
        const wrapper = renderer.create(<BlocxTabContent/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxTabContent component', function () {
        const wrapper = shallow(<BlocxTabContent/>);
        expect(wrapper).toBeTruthy();
    });

});

describe('<BlocxTabContentItem />', function () {

    it('renders correctly [BlocxTabContentItem]', function () {
        const wrapper = renderer.create(<BlocxTabContentItem/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxTabContentItem component', function () {
        const wrapper = shallow(<BlocxTabContentItem/>);
        expect(wrapper).toBeTruthy();
    });

});

describe('<BlocxTabLabel />', function () {

    it('renders correctly [BlocxTabLabel]', function () {
        const wrapper = renderer.create(<BlocxTabLabel/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxTabLabel component', function () {
        const wrapper = shallow(<BlocxTabLabel/>);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger click event when a tabs item is clicked', function () {
        const handleClick = jest.fn();
        const wrapper = shallow((<BlocxTabLabel onClick={handleClick} />));
        wrapper.find('a').simulate('click');
        expect(handleClick).toHaveBeenCalled();
    });
});

describe('<BlocxTabNav />', function () {

    it('renders correctly [BlocxTabNav]', function () {
        const wrapper = renderer.create(<BlocxTabNav/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxTabNav component', function () {
        const wrapper = shallow(<BlocxTabNav/>);
        expect(wrapper).toBeTruthy();
    });

});