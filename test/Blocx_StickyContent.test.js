//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxStickyContent} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxStickyContent />', function () {

    const stickyItems=[{itemName:"Morning Sunshine",
        itemImage:require("../../../assets/images/blocx-sticky-note_image_purple-rectangle.svg"),
        itemClassName:"blocx-sticky-note_purple-rectangle blocx-sticky-note_color-block",
        itemId:1
        },
        {itemName:"Purple Twilight",
        itemImage:require("../../../assets/images/blocx-sticky-note_image-blue-rectangle.svg"),
        itemClassName:"blocx-sticky-note_blue-rectangle",
        itemId:2
        },
        {itemName:"Hydrogen Blue",
        itemImage:require("../../../assets/images/blocx-stcky-note_image-orange-rectangle.svg"),
        itemClassName:"blocx-sticky-note_orange-rectangle",
        itemId:3
        },
        {itemName:"Red Wood",
        itemImage:require("../../../assets/images/blocx-sticky-note_image-yellow-rectangle.svg"),
        itemClassName:"blocx-sticky-note_yellow-rectangle",
        itemId:4
        }
    ]

    it('renders correctly [BlocxStickyContent]', function () {
        const wrapper = renderer.create(<BlocxStickyContent data={stickyItems}
            stickyPosition="left-center"
            stickyCustomClass="mySticky" />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxStickyContent component when alignment is `stickyPosition="left-center"`', function () {
        const wrapper = shallow(<BlocxStickyContent data={stickyItems}
            stickyPosition="left-center"
            stickyCustomClass="mySticky" />);
        expect(wrapper).toBeTruthy();
    });


    it('should have BlocxStickyContent component when alignment is `stickyPosition="right-center"`', function () {
        const wrapper = shallow(<BlocxStickyContent data={stickyItems}
            stickyPosition="right-center" />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxStickyContent component when alignment is `stickyPosition="bottom-right"`', function () {
        const wrapper = shallow(<BlocxStickyContent data={stickyItems}
            stickyPosition="bottom-right" />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxStickyContent component when alignment is `stickyPosition="bottom-left"`', function () {
        const wrapper = shallow(<BlocxStickyContent data={stickyItems}
            stickyPosition="bottom-left" />);
        expect(wrapper).toBeTruthy();
    });

    it('should call onSelection when an item is clicked from sticky container', function () {
        const onSelection = jest.fn();
        const wrapper = shallow((<BlocxStickyContent data={stickyItems} onClick = {onSelection}
            stickyPosition="bottom-right" />));
        wrapper.find('p').at(3).simulate('click');
        expect(onSelection).toBeDefined();
    });

    it('should toggle the display for `stickyPosition="bottom-right"`', function () {
        const toggleSticky = jest.fn();
        const wrapper = shallow((<BlocxStickyContent data={stickyItems} onClick = {toggleSticky}
            stickyPosition="bottom-right" />));
        wrapper.find('.panel-image-outer').simulate('click');
        expect(toggleSticky).toBeDefined();
    });

    it('should toggle the display for `stickyPosition="bottom-left"`', function () {
        const toggleSticky = jest.fn();
        const wrapper = shallow((<BlocxStickyContent data={stickyItems} onClick = {toggleSticky}
            stickyPosition="bottom-left" />));
        wrapper.find('.panel-image-outer').simulate('click');
        expect(toggleSticky).toBeDefined();
    });

    it('should toggle the display for `stickyPosition="right-center"`', function () {
        const toggleSticky = jest.fn();
        const wrapper = shallow((<BlocxStickyContent data={stickyItems} onClick = {toggleSticky}
            stickyPosition="right-center" />));
        wrapper.find('.panel-image-outer').simulate('click');
        expect(toggleSticky).toBeDefined();
    });

    it('should toggle the display for `stickyPosition="left-center"`', function () {
        const toggleSticky = jest.fn();
        const wrapper = shallow((<BlocxStickyContent Visibility data={stickyItems} onClick = {toggleSticky}
            stickyPosition="left-center" />));
        wrapper.find('.panel-image-outer').simulate('click');
        expect(toggleSticky).toBeDefined();
    });

    it('invokes `componentDidMount` when mounted', function () {
        jest.spyOn(BlocxStickyContent.prototype, 'componentDidMount');
        shallow(<BlocxStickyContent data={stickyItems} />);
        expect(BlocxStickyContent.prototype.componentDidMount).toBeDefined();
        BlocxStickyContent.prototype.componentDidMount.mockRestore();
    });

});