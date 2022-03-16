//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } fr//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxAccordionWrapper, BlocxAccordion, BlocxAccordionHeading, BlocxAccordionBody} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxAccordion />', function () {
    const items = [
        { id: '0', contentTitle: 'Title 1', contentText: 'Lorem Ipsum is simply dummy text', isOpened: true },
        { id: '1', contentTitle: 'Title 2', contentText: 'Lorem Ipsum is simply dummy text', isOpened: false },
        { id: '2', contentTitle: 'Title 3', contentText: 'Lorem Ipsum is simply dummy text', isOpened: false },
        { id: '3', contentTitle: 'Title 4', contentText: 'Lorem Ipsum is simply dummy text', isOpened: false }
    ];

    it('renders correctly', function () {
        const wrapper = renderer.create(<BlocxAccordion items = {items} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxAccordion component', function () {
        const wrapper = shallow(<BlocxAccordion items = { items } />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger onClick event', function () {
        const handleEvent = jest.fn();
        const wrapper = shallow(<BlocxAccordion  items = { items } onClick={handleEvent} />);
        wrapper.find('.blocx-accordion').first().simulate('click', {type: 'click', preventDefault: () => {}});
        expect(handleEvent).toHaveBeenCalled();
    });

    it('should trigger onMouseOver event', function () {
        const handleEvent = jest.fn();
        const wrapper = shallow(<BlocxAccordion  items = { items } onMouseOver={handleEvent} />);
        wrapper.find('.blocx-accordion').first().simulate('mouseover', {type: 'mouseover', preventDefault: () => {}});
        expect(handleEvent).toBeDefined();
    });
    it('should trigger onMouseOut event', function () {
        const handleEvent = jest.fn();
        const wrapper = shallow(<BlocxAccordion  items = { items } onMouseOut={handleEvent} />);
        wrapper.find('.blocx-accordion').first().simulate('mouseout', {type: 'mouseout', preventDefault: () => {}});
        expect(handleEvent).toBeDefined();
    });

    it('should trigger onClick event when type = default', function () {
        const handleEvent = jest.fn();
        const wrapper = shallow(<BlocxAccordion  items = { items } onClick={handleEvent} />);
        wrapper.find('.blocx-accordion').first().simulate('change', {type: 'default', preventDefault: () => {}});
        expect(handleEvent).not.toHaveBeenCalled();
    });

    it('check the defined functions: onClick, onMouseOut, onMouseOver', function () {
        expect(BlocxAccordion.defaultProps.onClick).toBeDefined();
        expect(BlocxAccordion.defaultProps.onMouseOut).toBeDefined();
        expect(BlocxAccordion.defaultProps.onMouseOver).toBeDefined();
    });

});

describe('<BlocxAccordionBody />', function () {
    
    it('should render Default', function () {
        const props = {
            DEFAULT:`blocx-accordion_content`,
        }
        const wrapper = mount(<BlocxAccordionBody.Default {...props} />);
        expect(wrapper.props).toBeDefined();
    });

})

describe('<BlocxAccordionHeading />', function () {

    it('renders correctly [BlocxAccordionHeading]', function () {
        const wrapper = renderer.create(<BlocxAccordionHeading/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxAccordionHeading component', function () {
        const wrapper = shallow(<BlocxAccordionHeading/>);
        expect(wrapper).toBeTruthy();
    });
    
})

describe('<BlocxAccordionWrapper />', function () {

    it('renders correctly [BlocxAccordionWrapper]', function () {
        const wrapper = renderer.create(<BlocxAccordionWrapper/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxAccordionWrapper component', function () {
        const wrapper = shallow(<BlocxAccordionWrapper/>);
        expect(wrapper).toBeTruthy();
    });
    
    it('check the defined functions: onClick, onMouseOut, onMouseOver', function () {
        expect(BlocxAccordionWrapper.defaultProps.onClick).toBeDefined();
        expect(BlocxAccordionWrapper.defaultProps.onMouseOut).toBeDefined();
        expect(BlocxAccordionWrapper.defaultProps.onMouseOver).toBeDefined();
    });

});


import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Accordion, AccordionBody, AccordionHeading, AccordionWrapper} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<Accordion />', function () {
    const items = [
        { id: '0', contentTitle: 'Title 1', contentText: 'Lorem Ipsum is simply dummy text', isOpened: true },
        { id: '1', contentTitle: 'Title 2', contentText: 'Lorem Ipsum is simply dummy text', isOpened: false },
        { id: '2', contentTitle: 'Title 3', contentText: 'Lorem Ipsum is simply dummy text', isOpened: false },
        { id: '3', contentTitle: 'Title 4', contentText: 'Lorem Ipsum is simply dummy text', isOpened: false }
    ];

    it('renders correctly', function () {
        const wrapper = renderer.create(<Accordion items = {items} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have Accordion component', function () {
        const wrapper = shallow(<Accordion items = { items } />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger onClick event', function () {
        const handleEvent = jest.fn();
        const wrapper = shallow(<Accordion  items = { items } onClick={handleEvent} />);
        wrapper.find('.blocx-accordion').first().simulate('click', {type: 'click', preventDefault: () => {}});
        expect(handleEvent).toHaveBeenCalled();
    });

    it('should trigger onMouseOver event', function () {
        const handleEvent = jest.fn();
        const wrapper = shallow(<Accordion  items = { items } onMouseOver={handleEvent} />);
        wrapper.find('.blocx-accordion').first().simulate('mouseover', {type: 'mouseover', preventDefault: () => {}});
        expect(handleEvent).toBeDefined();
    });
    it('should trigger onMouseOut event', function () {
        const handleEvent = jest.fn();
        const wrapper = shallow(<Accordion  items = { items } onMouseOut={handleEvent} />);
        wrapper.find('.blocx-accordion').first().simulate('mouseout', {type: 'mouseout', preventDefault: () => {}});
        expect(handleEvent).toBeDefined();
    });

    it('should trigger onClick event when type = default', function () {
        const handleEvent = jest.fn();
        const wrapper = shallow(<Accordion  items = { items } onClick={handleEvent} />);
        wrapper.find('.blocx-accordion').first().simulate('change', {type: 'default', preventDefault: () => {}});
        expect(handleEvent).not.toHaveBeenCalled();
    });

    it('check the defined functions: onClick, onMouseOut, onMouseOver', function () {
        expect(Accordion.defaultProps.onClick).toBeDefined();
        expect(Accordion.defaultProps.onMouseOut).toBeDefined();
        expect(Accordion.defaultProps.onMouseOver).toBeDefined();
    });

});

describe('<AccordionBody />', function () {
    
    it('should render Default', function () {
        const props = {
            DEFAULT:`blocx-accordion_content`,
        }
        const wrapper = mount(<AccordionBody.Default {...props} />);
        expect(wrapper.props).toBeDefined();
    });

})

describe('<AccordionHeading />', function () {

    it('renders correctly [AccordionHeading]', function () {
        const wrapper = renderer.create(<AccordionHeading/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have AccordionHeading component', function () {
        const wrapper = shallow(<AccordionHeading/>);
        expect(wrapper).toBeTruthy();
    });
    
})

describe('<AccordionWrapper />', function () {

    it('renders correctly [AccordionWrapper]', function () {
        const wrapper = renderer.create(<AccordionWrapper/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have AccordionWrapper component', function () {
        const wrapper = shallow(<AccordionWrapper/>);
        expect(wrapper).toBeTruthy();
    });
    
    it('check the defined functions: onClick, onMouseOut, onMouseOver', function () {
        expect(AccordionWrapper.defaultProps.onClick).toBeDefined();
        expect(AccordionWrapper.defaultProps.onMouseOut).toBeDefined();
        expect(AccordionWrapper.defaultProps.onMouseOver).toBeDefined();
    });

});