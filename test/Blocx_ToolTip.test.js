//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BlocxToolTip } from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxToolTip />', function () {

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxToolTip.topRight />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have Blocx_ToolTip component', function () {
        const wrapper = shallow(<BlocxToolTip.topRight />);
        expect(wrapper).toBeTruthy();
    });

    it('should render topRight prop type', function () {
        const props = {
            TOPRIGHT: `fa fa-info-circle blocx-tooltip nw`
        }
        const wrapper = mount(<BlocxToolTip.topRight {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render topLeft prop type', function () {
        const props = {
            TOPLEFT: `fa fa-info-circle blocx-tooltip ne`
        }
        const wrapper = mount(<BlocxToolTip.topLeft {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should call handleEvent', function () {
        const handleEvent = jest.fn();
        const wrapper = mount(<BlocxToolTip.topRight onMouseOver = {handleEvent} />);
        wrapper.find('i').simulate('mouseover', {type: 'mouseover', preventDefault: () => {}});
        expect(handleEvent).toHaveBeenCalled();
    });

    it('should call handleEvent', function () {
        const handleEvent = jest.fn();
        const wrapper = mount(<BlocxToolTip.topRight onMouseOut = {handleEvent} />);
        wrapper.find('i').simulate('mouseout', {type: 'mouseout', preventDefault: () => {}});
        expect(handleEvent).toHaveBeenCalled();
    });

    it('should call handleEvent', function () {
        const handleEvent = jest.fn();
        const wrapper = mount(<BlocxToolTip.topRight onMouseOut = {handleEvent} />);
        wrapper.find('i').simulate('mouseout', {type: 'default', preventDefault: () => {}});
        expect(handleEvent).not.toHaveBeenCalled();
    });
});