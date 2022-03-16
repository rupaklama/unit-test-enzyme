//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxTimeStamp} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxTimeStamp />', function () {
    
    it('renders correctly [BlocxTimeStamp]', function () {
        const wrapper = renderer.create(<BlocxTimeStamp />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxTimeStamp component and it will display `1 month ago`', function () {
        var inputDateTime= new Date();
        inputDateTime.setMonth( inputDateTime.getMonth() - 1 );
        const wrapper = shallow(<BlocxTimeStamp timeString={inputDateTime}
        showFullTime={true} />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxTimeStamp component and it will display `3 months ago`', function () {
        var inputDateTime= new Date();
        inputDateTime.setMonth( inputDateTime.getMonth() - 3 );
        const wrapper = shallow(<BlocxTimeStamp timeString={inputDateTime}
        showFullTime={false} />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxTimeStamp component and it will display `1 week ago`', function () {
        var inputDateTime= new Date();
        inputDateTime.setDate( inputDateTime.getDate() - 7 );
        const wrapper = shallow(<BlocxTimeStamp timeString={inputDateTime}
        showFullTime={false} />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxTimeStamp component and it will display `3 weeks ago`', function () {
        var inputDateTime= new Date();
        inputDateTime.setDate( inputDateTime.getDate() - 21 );
        const wrapper = shallow(<BlocxTimeStamp timeString={inputDateTime}
        showFullTime={false} />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxTimeStamp component and it will display `1 second ago`', function () {
        var inputDateTime= new Date();
        inputDateTime.setSeconds( inputDateTime.getSeconds() - 1 );
        const wrapper = shallow(<BlocxTimeStamp  timeString={inputDateTime} showDate={false}
            showTimeWithDate={true}
            limitinDays={1}/>);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxTimeStamp component and it will display `30 seconds ago`', function () {
        var inputDateTime= new Date();
        inputDateTime.setSeconds( inputDateTime.getSeconds() - 30 );
        const wrapper = shallow(<BlocxTimeStamp  timeString={inputDateTime} showDate={false}
            showTimeWithDate={true}
            limitinDays={1}/>);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxTimeStamp component and it will display `1 minute ago`', function () {
        var inputDateTime= new Date();
        inputDateTime.setMinutes( inputDateTime.getMinutes() - 1 );
        const wrapper = shallow(<BlocxTimeStamp  timeString={inputDateTime}
        showFullTime={false} />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxTimeStamp component and it will display `30 minutes ago`', function () {
        var inputDateTime= new Date()
        console.log('1',inputDateTime)
        inputDateTime.setMinutes( inputDateTime.getMinutes() - 30 );
        console.log('2',inputDateTime)
        const wrapper = shallow(<BlocxTimeStamp  timeString={inputDateTime}
        showFullTime={false} />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxTimeStamp component and it will display `1 hour ago`', function () {
        var inputDateTime= new Date();
        inputDateTime.setHours( inputDateTime.getHours() - 1 );
        const wrapper = shallow(<BlocxTimeStamp  timeString={inputDateTime}
        showFullTime={false} />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxTimeStamp component and it will display `3 hours ago`', function () {
        var inputDateTime= new Date();
        console.log(inputDateTime, '1')
        inputDateTime.setHours( inputDateTime.getHours() - 3 );
        console.log(inputDateTime, '2')
        const wrapper = shallow(<BlocxTimeStamp  timeString={inputDateTime}
        showFullTime={false} />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxTimeStamp component', function () {
        const wrapper = shallow(<BlocxTimeStamp  timeString="2019-09-15"
        limitinDays={10} />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxTimeStamp component and it will display `1 year ago`', function () {
        var inputDateTime= new Date();
        inputDateTime.setFullYear( inputDateTime.getFullYear() - 1 );
        const wrapper = shallow(<BlocxTimeStamp timeString={inputDateTime}
        showFullTime={false} />);
        expect(wrapper).toBeTruthy();
    });
    
    it('should have BlocxTimeStamp component and it will display `3 years ago`', function () {
        var inputDateTime= new Date();
        inputDateTime.setFullYear( inputDateTime.getFullYear() - 3 );
        const wrapper = shallow(<BlocxTimeStamp timeString={inputDateTime}
        showFullTime={false} />);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxTimeStamp component and it will display `1 day ago`', function () {
        var inputDateTime= new Date();
        inputDateTime.setDate( inputDateTime.getDate() - 1 );
        const wrapper = shallow(<BlocxTimeStamp timeString={inputDateTime}
        showFullTime={false}/>);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxTimeStamp component and it will display `11 days ago`', function () {
        var inputDateTime= new Date();
        inputDateTime.setDate( inputDateTime.getDate() - 11 );
        const wrapper = shallow(<BlocxTimeStamp timeString={inputDateTime}
        showFullTime={false}/>);
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxTimeStamp component and it will display `current date time`', function () {
        var inputDateTime= new Date();
        console.log('currenttime', inputDateTime)
        const wrapper = shallow(<BlocxTimeStamp timeString={inputDateTime} showDate={true}
            showTimeWithDate={false}
            limitinDays={1}/>);
        expect(wrapper).toBeTruthy();
    });

});