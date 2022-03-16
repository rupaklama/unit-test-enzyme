//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  { BlocxButton } from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxButton />', function () {

    it('renders correctly [BlocxButton.Primary]', function () {
        const wrapper = renderer.create(<BlocxButton.Primary />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxButton component', function () {
        const wrapper = shallow(<BlocxButton.Primary/>);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger onClick event', function () {
        const handleEvent = jest.fn();
        const wrapper = mount(<BlocxButton.Primary onClick={handleEvent} />);
        wrapper.find('button').simulate('click', {type: 'click', preventDefault: () => {}});
        expect(handleEvent).toHaveBeenCalled();
    });

    it('should trigger onMouseOver event', function () {
        const handleEvent = jest.fn();
        const wrapper = mount(<BlocxButton.Primary onMouseOver={handleEvent} />);
        wrapper.find('button').simulate('mouseover', {type: 'mouseover', preventDefault: () => {}});
        expect(handleEvent).toHaveBeenCalled();
    });
    it('should trigger onMouseOut event', function () {
        const handleEvent = jest.fn();
        const wrapper = mount(<BlocxButton.Primary onMouseOut={handleEvent} />);
        wrapper.find('button').simulate('mouseout', {type: 'mouseout', preventDefault: () => {}});
        expect(handleEvent).toHaveBeenCalled();
    });

    it('should trigger onClick event when type: `default`', function () {
        const handleEvent = jest.fn();
        const wrapper = mount(<BlocxButton.Primary onClick={handleEvent} />);
        wrapper.find('button').simulate('click', {type: 'default', preventDefault: () => {}});
        expect(handleEvent).not.toHaveBeenCalled();
    });

    it('should render Primary Button', function () {
        const props = {
            PRIMARY: `blocx-button blocx-button-primary`,
        }
        const wrapper = mount(<BlocxButton.Primary {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Secondary Button', function () {
        const props = {
            SECONDARY: `blocx-button blocx-button-secondary`
        }
        const wrapper = mount(<BlocxButton.Secondary {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Success Button', function () {
        const props = {
            SUCCESS: `blocx-button blocx-button-success`
        }
        const wrapper = mount(<BlocxButton.Success {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Fail Button', function () {
        const props = {
            FAIL: `blocx-button blocx-button-danger`
        }
        const wrapper = mount(<BlocxButton.Fail {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Primary_Outline Button', function () {
        const props = {
            PRIMARY_OUTLINE: `blocx-button blocx-button-outline--primary`
        }
        const wrapper = mount(<BlocxButton.Primary_Outline {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Secondary_Outline Button', function () {
        const props = {
            SECONDARY_OUTLINE: `blocx-button blocx-button-outline-secondary`
        }
        const wrapper = mount(<BlocxButton.Secondary_Outline {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Success_Outline Button', function () {
        const props = {
            SUCCESS_OUTLINE: `blocx-button blocx-button-outline-success`
        }
        const wrapper = mount(<BlocxButton.Success_Outline {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Fail_Outline Button', function () {
        const props = {
            FAIL_OUTLINE: `blocx-button blocx-button-outline-danger`
        }
        const wrapper = mount(<BlocxButton.Fail_Outline {...props} />);
        expect(wrapper.props).toBeDefined();
    });
});