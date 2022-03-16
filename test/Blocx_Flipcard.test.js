//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxFlipcard} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxFlipcard />', function () {

    const cardData =[
        {
            MainHeading: "Managing Director",
            MainImage: "",
            FlipHeading:"Name Surname",
            Flipcontent:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor.",
            id:1
        }
    ]

    it('renders correctly [BlocxFlipcard]', function () {
        const wrapper = renderer.create(<BlocxFlipcard data={cardData} countOnMob={1} countOnTab={2} countOnDesk={4} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxFlipcard component', function () {
        const wrapper = shallow(<BlocxFlipcard data={cardData} countOnMob={1} countOnTab={2} countOnDesk={4} />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger onClick event', function () {
        const onClick = jest.fn();
        const wrapper = shallow(<BlocxFlipcard data={cardData} countOnMob={1} countOnTab={2} countOnDesk={4} onClick={onClick} />);
        wrapper.find('.blocx-flipcard').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });

    it('should trigger mouseEnter event', function () {
        const mouseEnter = jest.fn();
        const wrapper = shallow(<BlocxFlipcard data={cardData} countOnMob={1} countOnTab={2} countOnDesk={4} onMouseEnter={mouseEnter} />);
        wrapper.find('.blocx-flipcard').simulate('mouseenter');
        expect(mouseEnter).toHaveBeenCalled();
    });
    it('should trigger mouseLeave event', function () {
        const mouseLeave = jest.fn();
        const wrapper = shallow(<BlocxFlipcard data={cardData} countOnMob={1} countOnTab={2} countOnDesk={4} onMouseLeave={mouseLeave} />);
        wrapper.find('.blocx-flipcard').simulate('mouseleave');
        expect(mouseLeave).toHaveBeenCalled();
    });

});