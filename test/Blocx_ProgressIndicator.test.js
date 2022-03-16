//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxProgressIndicator} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxProgressIndicator />', function () {

  const steps = [{ title: 'Step One' }, { title: 'Step Two' }, { title: 'Step Three' }, { title: 'Step Four' }]
  const activeStep = 2;
  const totalSteps = 8;

    it('renders correctly[BlocxProgressIndicator]', function () {
        const wrapper = renderer.create(<BlocxProgressIndicator activeStep={activeStep} totalSteps={totalSteps} steps={steps} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxProgressIndicator component', function () {
        const wrapper = shallow(<BlocxProgressIndicator activeStep={activeStep} totalSteps={totalSteps} steps={steps} />);
        expect(wrapper).toBeTruthy();
    });

});
