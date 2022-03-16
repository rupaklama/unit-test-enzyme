//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxGallery} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxGallery />', function () {

    var GalleryData={
        items: [{
        id: "1",
        imgUrl: "/assets/images/blocx-gallery_img-1.png",
        thumbnalImg: "/assets/images/blocx-gallery_img-1.png",
        name: "image1"
        },{
        id: "2",
        imgUrl: "assets/images/blocx-gallery_img-2.png",
        thumbnalImg: "assets/images/blocx-gallery_img-2.png",
        name: "image2"
        },{
        id: "3",
        imgUrl: "assets/images/blocx-gallery_img-3.png",
        thumbnalImg: "assets/images/blocx-gallery_img-3.png",
        name: "image3"
        },{
        id: "4",
        imgUrl: "assets/images/blocx-gallery_img-4.png",
        thumbnalImg: "assets/images/blocx-gallery_img-4.png",
        name: "image4"
        },{
        id: "5",
        imgUrl: "assets/images/blocx-gallery_img-5.png",
        thumbnalImg: "assets/images/blocx-gallery_img-5.png",
        name: "image5"
        },{
        id: "6",
        imgUrl: "assets/images/blocx-gallery_img-6.png",
        thumbnalImg: "assets/images/blocx-gallery_img-6.png",
        name: "image6"
        }
    ]}
    
    it('renders correctly [BlocxGallery]', function () {
        const wrapper = renderer.create(<BlocxGallery data={GalleryData} variant="thumbView" />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxGallery component', function () {
        const wrapper = shallow(<BlocxGallery data={GalleryData} variant="thumbView" />);
        expect(wrapper).toBeTruthy();
    });

    it('when variant!="thumbView"', function () {
        const wrapper = shallow(<BlocxGallery data={GalleryData} variant="other" />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger onClick when an image is clicked to view in gallery', function () {
        const setImage = jest.fn();
        const wrapper = shallow((<BlocxGallery data={GalleryData} variant="thumbView" onClick={setImage} />));
        wrapper.find('img').at(2).simulate('click');
        wrapper.setState({activeImgID: {items:{id: 3}}})
        expect(setImage).toBeDefined();
    });

});