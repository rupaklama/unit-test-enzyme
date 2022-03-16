//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BlocxCard , BlocxCardText, BlocxCardBody , BlocxCardImage, BlocxCardHeader } from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxCard />', function () {

    it('renders correctly (BlocxCard)', function () {
        const wrapper = renderer.create(<BlocxCard.Default />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxCard component', function () {
        const wrapper = shallow(<BlocxCard.Default />);
        expect(wrapper).toBeTruthy();
    });

    it('should call handleClick when clicked', function () {
        const handleClick = jest.fn();
        const wrapper = mount(<BlocxCard.Default onClick={handleClick} />);
        wrapper.find('div').simulate('click', { preventDefault: () => {}});
        expect(handleClick).toHaveBeenCalled();
    });

    it('should render Default', function () {
        const props = {
            VARIANT1: 'blocx-card blocx-card-post-thumnails',
        }
        const wrapper = mount(<BlocxCard.Default {...props} />);
        expect(wrapper.props).toBeDefined();
    });
    
    it('should render Variant1', function () {
        const props = {
            VARIANT1: 'blocx-card blocx-card-post-thumnails',
        }
        const wrapper = mount(<BlocxCard.Variant1 {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Variant2', function () {
        const props = {
            VARIANT2: 'blocx-card blocx-card-post',
        }
        const wrapper = mount(<BlocxCard.Variant2 {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Variant3', function () {
        const props = {
            VARIANT3: 'blocx-card blocx-card-post-preview',
        }
        const wrapper = mount(<BlocxCard.Variant3 {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Variant4', function () {
        const props = {
            VARIANT4: 'blocx-card blocx-card-image-thumbnail',
        }
        const wrapper = mount(<BlocxCard.Variant4 {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Variant5', function () {
        const props = {
            VARIANT5: 'blocx-card blocx-card-post-thumnails-img-middle',
        }
        const wrapper = mount(<BlocxCard.Variant5 {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Variant6', function () {
        const props = {
            VARIANT6: 'blocx-card blocx-background-image-card',
        }
        const wrapper = mount(<BlocxCard.Variant6 {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Variant7', function () {
        const props = {
            VARIANT7: 'blocx-card blocx-card-review',
        }
        const wrapper = mount(<BlocxCard.Variant7 {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Variant8', function () {
        const props = {
            VARIANT8: 'blocx-card blocx-card-product-view',
        }
        const wrapper = mount(<BlocxCard.Variant8 {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Variant9', function () {
        const props = {
            VARIANT9: 'blocx-card blocx-card-product-view-list',
        }
        const wrapper = mount(<BlocxCard.Variant9 {...props} />);
        expect(wrapper.props).toBeDefined();
    });

});

describe('<BlocxCardBody />', function () {

    it('renders correctly (BlocxCardBody)', function () {
        const wrapper = renderer.create(<BlocxCardBody.Default />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxCardBody component', function () {
        const wrapper = shallow(<BlocxCardBody.Default />);
        expect(wrapper).toBeTruthy();
    });

    it('should render Default prop type', function () {
        const props = {
            DEFAULT:`blocx-card_body`,
        }
        const wrapper = mount(<BlocxCardBody.Default {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Left prop type', function () {
        const props = {
            LEFT: `blocx-card_body-content_left`,
        }
        const wrapper = mount(<BlocxCardBody.Left {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Right prop type', function () {
        const props = {
            RIGHT: `blocx-card_body-content_right`,
        }
        const wrapper = mount(<BlocxCardBody.Right {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Link prop type', function () {
        const props = {
            LINK: `blocx-card_links`,
        }
        const wrapper = mount(<BlocxCardBody.Link {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Pricing prop type', function () {
        const props = {
            PRICING: `blocx-card_pricing`
        }
        const wrapper = mount(<BlocxCardBody.Pricing {...props} />);
        expect(wrapper.props).toBeDefined();
    });

});

describe('<BlocxCardHeader />', function () {

    it('renders correctly (BlocxCardHeader)', function () {
        const wrapper = renderer.create(<BlocxCardHeader.Default />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxCardHeader component', function () {
        const wrapper = shallow(<BlocxCardHeader.Default />);
        expect(wrapper).toBeTruthy();
    });

    it('should render Default align props', function () {
        const props = {
            DEFAULT:`blocx-card_header`,
        }
        const wrapper = mount(<BlocxCardHeader.Default {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Left align props', function () {
        const props = {
            LEFT: `blocx-card_header-left`,
        }
        const wrapper = mount(<BlocxCardHeader.Left {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Right align props', function () {
        const props = {
            RIGHT: `blocx-card_header-right`
        }
        const wrapper = mount(<BlocxCardHeader.Right {...props} />);
        expect(wrapper.props).toBeDefined();
    });

});

describe('<BlocxCardImage />', function () {

    it('renders correctly (BlocxCardImage)', function () {
        const wrapper = renderer.create(<BlocxCardImage.Default />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxCardImage component', function () {
        const wrapper = shallow(<BlocxCardImage.Default />);
        expect(wrapper).toBeTruthy();
    });

    it('should render Default type props', function () {
        const props = {
            DEFAULT:`blocx-card_img`,
        }
        const wrapper = mount(<BlocxCardImage.Default {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Left type props', function () {
        const props = {
            LEFT: `blocx-card_img-left`,
        }
        const wrapper = mount(<BlocxCardImage.Left {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Right type props', function () {
        const props = {
            RIGHT: `blocx-card_body-content_right`,
        }
        const wrapper = mount(<BlocxCardImage.Right {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Top type props', function () {
        const props = {
            TOP: `blocx-card_img-top`,
        }
        const wrapper = mount(<BlocxCardImage.Top {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Bottom type props', function () {
        const props = {
            BOTTOM: `blocx-card_img-bottom`,
        }
        const wrapper = mount(<BlocxCardImage.Bottom {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Nostyle type props', function () {
        const props = {
            NOSTYLE: ``
        }
        const wrapper = mount(<BlocxCardImage.Nostyle {...props} />);
        expect(wrapper.props).toBeDefined();
    });

});

describe('<BlocxCardText />', function () {

    it('renders correctly (BlocxCardText)', function () {
        const wrapper = renderer.create(<BlocxCardText.Default />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxCardText component', function () {
        const wrapper = shallow(<BlocxCardText.Default />);
        expect(wrapper).toBeTruthy();
    });

    it('should render Title type props', function () {
        const props = {
            TITLE:`blocx-card_title`,
        }
        const wrapper = mount(<BlocxCardText.Title {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Subtitle type props', function () {
        const props = {
            SUBTITLE:`blocx-card_subtitle`,
        }
        const wrapper = mount(<BlocxCardText.Subtitle {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Default type props', function () {
        const props = {
            DEFAULT:`card_text`,
        }
        const wrapper = mount(<BlocxCardText.Default {...props} />);
        expect(wrapper.props).toBeDefined();
    });

    it('should render Text type props', function () {
        const props = {
            TEXT:`blocx-card_text`,
        }
        const wrapper = mount(<BlocxCardText.Text {...props} />);
        expect(wrapper.props).toBeDefined();
    });

});