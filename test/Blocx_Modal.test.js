//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BlocxModalBody, BlocxModalButtonControls, BlocxModalHeader, BlocxModal } from 'blocx-react-components'

configure({adapter: new Adapter()});

describe('<BlocxModal />', function () {

    it('renders correctly [BlocxModal]', function () {
        const wrapper = renderer.create(<BlocxModal.Default />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxModal component', function () {
        const wrapper = shallow(<BlocxModal.Default />);
        expect(wrapper).toBeTruthy();
    });

    it('should render Default', function () {
        const props = {
            DEFAULT:`blocx-modal`,
        }
        const wrapper = mount(<BlocxModal.Default {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Overlay', function () {
        const props = {
            OVERLAY: 'modal_overlay'
        }
        const wrapper = mount(<BlocxModal.Overlay {...props} />);
        expect(wrapper.props).toBeDefined();
    });

});

describe('<BlocxModalBody />', function () {

    it('renders correctly [BlocxModalBody]', function () {
        const wrapper = renderer.create(<BlocxModalBody.Default />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxModalBody component', function () {
        const wrapper = shallow(<BlocxModalBody.Default />);
        expect(wrapper).toBeTruthy();
    });

    it('should render Default', function () {
        const props = {
            BODY:`blocx-modal_body`
        }
        const wrapper = mount(<BlocxModalBody.Default {...props} />);
        expect(wrapper.props).toBeDefined();
    });

});

describe('<BlocxModalButtonControls />', function () {

    it('renders correctly [BlocxModalButtonControls]', function () {
        const wrapper = renderer.create(<BlocxModalButtonControls.Default />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxModalButtonControls component', function () {
        const wrapper = shallow(<BlocxModalButtonControls.Default />);
        expect(wrapper).toBeTruthy();
    });

    it('should render Default', function () {
        const props = {
            BUTTON:`btn_controls`
        }
        const wrapper = mount(<BlocxModalButtonControls.Default {...props} />);
        expect(wrapper.props).toBeDefined();
    });

});

describe('<BlocxModalHeader />', function () {

    it('renders correctly [BlocxModalHeader]', function () {
        const wrapper = renderer.create(<BlocxModalHeader.Default />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxModalHeader component', function () {
        const wrapper = shallow(<BlocxModalHeader.Default />);
        expect(wrapper).toBeTruthy();
    });

    it('should render Default', function () {
        const props = {
            HEADER:`blocx-modal_header`
        }
        const wrapper = mount(<BlocxModalHeader.Default {...props} />);
        expect(wrapper.props).toBeDefined();
    });

});