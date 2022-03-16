//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxMegaMenu} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxMegaMenu />', function () {

        let items = { "logo": {
            "imgUrl": "/assets/images/blocx-logo.svg",
            "imgAlt": ""
          },
          items:[
          {
            "name": "Home",
            "url": "#",
            "level": 1,
            "items": null
          },
          {
            "name": "About Us",
            "url": "#",
            "leftpanel":{
              "imgUrl":"http://krtechsolution.com/wp-content/uploads/2018/02/aboutus1.jpg",
              "heading":"ABOUT US",
              "description":"Integer onare libero nisi. Duis ac magna urna. Nulla facilisi."
            },
            "level": 1,
            "items": [
              {
                "name": "The Group",
                "url": "#",
                "level": 2,
                "items": [
                  {
                    "name": "Our Founder",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Annual Reports",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Governance",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Our Values",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Our Priorities",
                    "url": "#",
                    "level": 3
                  }
                ]
              },
              {
                "name": "Categories",
                "url": "#",
                "level": 2,
                "items": [
                  {
                    "name": "India Leadership Team",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Center Heads Organization",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Centers of Excellence",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Quality Assurance India",
                    "url": "test",
                    "level": 3
                  },
                  {
                    "name": "Press Release",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Media Coverage",
                    "url": "#",
                    "level": 3
                  }
                ]
              },
              {
                "name": "Networks",
                "url": "#",
                "level": 2,
                "items": [
                  {
                    "name": "Europe SBU India",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Business Services India",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Capgemini Invent",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "FS SBU",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Insights and Data",
                    "url": "#",
                    "level": 3
                  }
                ]
              },
              {
                "name": "Follow Us",
                "url": "#",
                "level": 2,
                "items": [
                  {
                    "name": "Finance",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Human Resource",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Legal",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Marketing",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Procurement",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Travel desk - India",
                    "url": "#",
                    "level": 3
                  }
                ]
              }
            ]
          },
          {
            "name": "Portfolio",
            "url": "#",
            "level": 1,
            "items": null
          },
          {
            "name": "contact",
            "url": "#",
            "level": 1,
             "leftpanel":{
              "imgUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkaJd-Kp4Yhtqcy7AKkgdQqYroUEmd2mVW6CNscrud70VXAwVDMw",
              "heading":"CONTACT US",
              "description":"Integer onare libero nisi. Duis ac magna urna. Nulla facilisi."
            },
            "items": [
              {
                "name": "The Group",
                "url": "#",
                "level": 2,
                "items": [
                  {
                    "name": "Our Founder",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Annual Reports",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Governance",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Our Values",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Our Priorities",
                    "url": "#",
                    "level": 3
                  }
                ]
              },
              {
                "name": "Categories",
                "url": "#",
                "level": 2,
                "items": [
                  {
                    "name": "India Leadership Team",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Center Heads Organization",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Centers of Excellence",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Quality Assurance India",
                    "url": "test",
                    "level": 3
                  },
                  {
                    "name": "Press Release",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Media Coverage",
                    "url": "#",
                    "level": 3
                  }
                ]
              },
              {
                "name": "Networks",
                "url": "#",
                "level": 2,
                "items": [
                  {
                    "name": "Europe SBU India",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Business Services India",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Capgemini Invent",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "FS SBU",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Insights and Data",
                    "url": "#",
                    "level": 3
                  }
                ]
              },
              {
                "name": "Follow Us",
                "url": "#",
                "level": 2,
                "items": [
                  {
                    "name": "Finance",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Human Resource",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Legal",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Marketing",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Procurement",
                    "url": "#",
                    "level": 3
                  },
                  {
                    "name": "Travel desk - India",
                    "url": "#",
                    "level": 3
                  }
                ]
              }
            ]
          }
        ]}
    
    it('renders correctly [BlocxMegaMenu]', function () {
        const wrapper = renderer.create(<BlocxMegaMenu data = { items } />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxMegaMenu component', function () {
        const wrapper = shallow(<BlocxMegaMenu data = { items } />);
        expect(wrapper).toBeTruthy();
    });

    it('should trigger openMenu when a menu item having no sub-menu items is clicked ', function () {
      const openMenu = jest.fn();
      const wrapper = shallow((<BlocxMegaMenu data = { items } onClick={openMenu} />));
      wrapper.find('a').at(0).simulate('click', {openMenu:'Home'});
      expect(openMenu).toBeDefined();
    });

    it('should trigger openMenu when a menu item having sub-menu items is opened', function () {
        const openMenu = jest.fn();
        const wrapper = shallow((<BlocxMegaMenu data = { items } onClick={openMenu} />));
        wrapper.find('a').at(1).simulate('click');
        expect(openMenu).toBeDefined();
    });

    it('should trigger closeMenu when a opened sub-menu item is closed', function () {
      const closeMenu = jest.fn();
      const wrapper = shallow((<BlocxMegaMenu data = { items } onClick={closeMenu} />));
      wrapper.find('a').at(1).simulate('click');
      wrapper.find('.mega-menu-close-icon-span').simulate('click');
      expect(closeMenu).toBeDefined();
  });

});