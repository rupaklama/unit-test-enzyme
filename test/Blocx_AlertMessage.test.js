//To run unit tests
//npm install --save blocx-react-components
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxAlertMessage} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxAlertMessage />', function () {

    it('should render Success', function () {
        const props = {
            SUCCESS:`blocx-alert blocx-alert-success`,
        }
        const wrapper = shallow(<BlocxAlertMessage.Success><BlocxAlertMessage {...props} /></BlocxAlertMessage.Success>);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Error', function () {
        const props = {
            ERROR:`blocx-alert blocx-alert-error`,
        }
        const wrapper = shallow(<BlocxAlertMessage.Error><BlocxAlertMessage {...props} /></BlocxAlertMessage.Error>);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Info', function () {
        const props = {
            INFO:'blocx-alert blocx-alert-info',
        }
        const wrapper = shallow(<BlocxAlertMessage.Info><BlocxAlertMessage {...props} /></BlocxAlertMessage.Info>);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Warning', function () {
        const props = {
            WARNING: 'blocx-alert blocx-alert-warning'
        }
        const wrapper = shallow(<BlocxAlertMessage.Warning><BlocxAlertMessage {...props} /></BlocxAlertMessage.Warning>);
        expect(wrapper.props).toBeDefined();
    });
});