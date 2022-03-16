//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxTree} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxTree />', function () {

var TreeData = [
    {
      "type": "Parent 1",
      "collapsed": false,
      "child": [
        {
          "name": "child 1",
          "collapsed": false,
          "child": [
            {
              "name": "Sub - child 1",
              "collapsed": false,
              "child": [
                {
                  "name": "SuperSub - child 1",
                  "collapsed": false,
                  "child": "SuperSub-child"
                },
                {
                  "name": "SuperSub - child 2",
                  "collapsed": false,
                  "child": []
                }
              ]
            },
            {
              "name": "Sub - child 2",
              "collapsed": false,
              "child": "Sub-child"
            }
          ]
        },
        {
          "name": "child 2",
          "collapsed": false,
          "child": "child"
        }
      ]
    },
    {
      "type": "Parent 2",
      "collapsed": false,
      "child": [
        {
          "name": "child 1",
          "collapsed": false,
          "child": "child"
        }
      ]
    }
  ]

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxTree data={TreeData} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxTree component', function () {
        const wrapper = shallow(<BlocxTree data={TreeData} />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger click event when when parent is clicked', function () {
        const handleClick = jest.fn();
        const wrapper = shallow(<BlocxTree data={TreeData} onClick = {handleClick} />);
        wrapper.setState({collapsed: true});
        wrapper.find('a').first().simulate('click');
        wrapper.setState({collapsed: false});
        expect(handleClick).toBeDefined();
    });

    it('should trigger click event when child is clicked', function () {
        const handleClick = jest.fn();
        const wrapper = mount(<BlocxTree data={TreeData} onClick = {handleClick} />);
        wrapper.setState({collapsed: true});
        wrapper.find('a').first().simulate('click');
        wrapper.setState({collapsed: false});
        expect(handleClick).toBeDefined();
    });

    it('should trigger click event when child is clicked', function () {
        const handleClick = jest.fn();
        const wrapper = shallow(<BlocxTree data={TreeData} onClick = {handleClick} ></BlocxTree>);
        wrapper.setState({collapsed: true});
        wrapper.find('TreeView').at(1).simulate('click');
        wrapper.setState({collapsed: false});
        expect(handleClick).toBeDefined();
    });
});