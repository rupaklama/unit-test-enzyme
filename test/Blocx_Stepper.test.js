//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxStepper} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxStepper />', function () {

    it('renders correctly [BlocxStepper]', function () {
        const wrapper = renderer.create(<BlocxStepper minValue={0} maxValue={10} initialValue={3} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxStepper component', function () {
        const wrapper = shallow(<BlocxStepper minValue={0} maxValue={10} initialValue={3} />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger onPlusClick when plus icon is clicked', function () {
        const onPlusClick = jest.fn();
        const wrapper = shallow((<BlocxStepper minValue={0} maxValue={10} initialValue={3} onClick={onPlusClick} />));
        wrapper.find('.blocx-incremental-value_increment').simulate('click');
        expect(onPlusClick).toBeDefined();
    });

    it('should trigger onPlusClick when plus icon is clicked', function () {
        const onPlusClick = jest.fn();
        const wrapper = shallow((<BlocxStepper minValue={0} maxValue={10} initialValue={34} onClick={onPlusClick} />));
        wrapper.find('.blocx-incremental-value_increment').simulate('click');
        expect(onPlusClick).toBeDefined();
    });

    it('should trigger onMinusClick when minus icon is clicked and initialValue>minValue', function () {
        const onMinusClick = jest.fn();
        const wrapper = shallow((<BlocxStepper minValue={0} maxValue={10} initialValue={2} onClick={onMinusClick} />));
        wrapper.find('.blocx-incremental-value_decrement').simulate('click', {initialValue: 2});
        expect(onMinusClick).toBeDefined();
    });

    it('should trigger onMinusClick when minus icon is clicked and initialValue<minValue', function () {
        const onMinusClick = jest.fn();
        const wrapper = shallow((<BlocxStepper minValue={10} maxValue={100} initialValue={2} onClick={onMinusClick} />));
        wrapper.find('.blocx-incremental-value_decrement').simulate('click', {initialValue: 2});
        expect(onMinusClick).toBeDefined();
    });

});