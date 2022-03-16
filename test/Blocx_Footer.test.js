//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxFooter, BlocxFooterBody} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxFooter />', function () {

    it('renders correctly [BlocxFooter]', function () {
      const wrapper = renderer.create(<BlocxFooter />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxFooter component', function () {
        const wrapper = shallow(<BlocxFooter />);
        expect(wrapper).toBeTruthy();
    });

});

describe('<BlocxFooterBody />', function () {

    it('renders correctly [BlocxFooterBody]', function () {
      const wrapper = renderer.create(<BlocxFooterBody.Default />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxFooterBody component', function () {
        const wrapper = shallow(<BlocxFooterBody.Default />);
        expect(wrapper).toBeTruthy();
    });

    it('should render Default', function () {
      const props = {
          DEFAULT:`container`,
      }
      const wrapper = mount(<BlocxFooterBody.Default {...props} />);
      expect(wrapper.props).toBeDefined();
    });

    it('should render Grid', function () {
      const props = {
          GRID:`blocx-grid`
      }
      const wrapper = mount(<BlocxFooterBody.Grid {...props} />);
      expect(wrapper.props).toBeDefined();
    });

});