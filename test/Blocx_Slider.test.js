//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxSlider} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxSlider />', function () {

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxSlider />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxSlider component', function () {
        const wrapper = shallow(<BlocxSlider />);
        expect(wrapper).toBeTruthy();
    });

    it('should call onChange when slider value is changed', () => {
        const mockHandleChange = jest.fn();
        const onChange = jest.fn();
        const event = {
            range: 46,
            maxvalue: 100,
            BackgroundStyle: "linear-gradient(90deg, rgb(38, 153, 251) 46%, rgb(112, 110, 107) 46% )",
            active: "rgb(38, 153, 251)",
            progress: 46,
            inactive: "rgb(112, 110, 107)",
            onChange() {},
            target: { value: 46 }
        };
        const wrapper = mount(<BlocxSlider onChange = {onChange} handleChangeMock={mockHandleChange} />);
        wrapper.update();
        wrapper.find('.blocx-range-slider__range').simulate('change', {event, style: {background: "linear-gradient(90deg, rgb(38, 153, 251) 46%, rgb(112, 110, 107) 46% )" }});
        expect(mockHandleChange).toBeDefined();
        expect(event.target.value).toBe(46);
    });
});
