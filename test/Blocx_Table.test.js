//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxTableWrapper, BlocxTable, BlocxTableHeading, BlocxTableBody} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxTable />', function () {

    it('renders correctly[BlocxTable]', function () {
        const wrapper = renderer.create(<BlocxTable />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxTable component', function () {
        const wrapper = shallow(<BlocxTable />);
        expect(wrapper).toBeTruthy();
    });

    it('should verify defined defaultProps', function () {
        const wrapper = shallow(<BlocxTable.defaultProps.onClick />);
        expect(wrapper).toBeTruthy();
    });

});

describe('<BlocxTableHeading />', function () {

    it('renders correctly[BlocxTableHeading]', function () {
        const wrapper = renderer.create(<BlocxTableHeading />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxTableHeading component', function () {
        const wrapper = shallow(<BlocxTableHeading />);
        expect(wrapper).toBeTruthy();
    });

});

describe('<BlocxTableBody />', function () {

    it('renders correctly[BlocxTableBody]', function () {
        const wrapper = renderer.create(<BlocxTableBody />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxTableBody component', function () {
        const wrapper = shallow(<BlocxTableBody />);
        expect(wrapper).toBeTruthy();
    });

});

describe('<BlocxTableWrapper />', function () {

    it('renders correctly[BlocxTableWrapper]', function () {
        const wrapper = renderer.create(<BlocxTableWrapper />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxTableWrapper component', function () {
        const wrapper = shallow(<BlocxTableWrapper />);
        expect(wrapper).toBeTruthy();
    });

    it('should verify defined defaultProps', function () {
        const wrapper = shallow(<BlocxTableWrapper.defaultProps.onClick />);
        expect(wrapper).toBeTruthy();
    });

});