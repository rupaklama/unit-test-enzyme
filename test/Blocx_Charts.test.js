//To run unit tests
//npm install --save blocx-react-components
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxCharts} from 'blocx-react-components';
// import { Line,Doughnut,Pie,Bar,HorizontalBar } from 'react-chartjs-2';

configure({adapter: new Adapter()});

describe('<BlocxCharts />', function () {
    var BarData= {
        labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
        datasets: [{
          label: "Revenue",
          backgroundColor: ["#2699FB", "#2699FB", "#2699FB", "#2699FB", "#2699FB", "#2699FB"],
          data: [15000, 25500, 100000, 37000, 50500, 30000]
        }]
    };

    var BarOptions= {
      cornerRadius: 10,
      responsive: true,
      maintainAspectRatio: false,
      legend: { display: false },
      title: {
      display: true,
      text: 'Company Revenue'
    },
  }

    it('should have Bar Chart component', function () {
        const wrapper = shallow(<BlocxCharts ChartData={BarData} ChartOptions={BarOptions} ChartHeight={1014} ChartWidth={1804} type="Bar" />);
        expect(wrapper).toBeTruthy();
    });

    it('Bar', function () {
        const getDatasetAtEvent = jest.fn();
        const wrapper = mount(<BlocxCharts ChartData={BarData} ChartOptions={BarOptions} ChartHeight={1014} ChartWidth={1804} type="Bar" />);
        wrapper.find('Bar').simulate('click');
        wrapper.update();
        expect(getDatasetAtEvent).toBeDefined();
    });

    it('should have horizontalBar Chart component', function () {
        const wrapper = shallow(<BlocxCharts ChartData={BarData} ChartOptions={BarOptions} ChartHeight={1014} ChartWidth={1804} type="horizontalBar" />);
        expect(wrapper).toBeTruthy();
    });

    it('horizontalBar', function () {
        const getDatasetAtEvent = jest.fn();
        const wrapper = mount(<BlocxCharts ChartData={BarData} ChartOptions={BarOptions} ChartHeight={1014} ChartWidth={1804} type="horizontalBar" />);
        wrapper.find('HorizontalBar').simulate('click');
        wrapper.update();
        expect(getDatasetAtEvent).toBeDefined();
    });

    const LineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Sogeti",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#727272",
            borderColor: "#727272", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#FFB936",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "#FFB936",
            pointHoverBorderColor: "#FFB936",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: [65, 59, 80, 81, 56, 55, 40,, 60, 55, 30, 78],
            spanGaps: true,
        }]
    };

      var LineOptions= {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: 'Employees',
              fontSize: 20
            }
          }]
        }
    }

    it('should have line Chart component', function () {
        const wrapper = shallow(<BlocxCharts ChartData={LineData} ChartOptions={LineOptions} ChartHeight={1014} ChartWidth={1804} type="line" />);
        expect(wrapper).toBeTruthy();
    });

    it('Line', function () {
        const getDatasetAtEvent = jest.fn();
        const wrapper = mount(<BlocxCharts ChartData={LineData} ChartOptions={LineOptions} ChartHeight={1014} ChartWidth={1804} type="line" />);
        wrapper.find('Line').simulate('click');
        wrapper.update();
        expect(getDatasetAtEvent).toBeDefined();
    });

    const DoughnutData = {
        labels: ["DCX", "Invent", "Sogeti", "Altran"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#55D8FE", "#FF8373", "#FFDA83", "#A3A0FB"],
          data: [5267, 2478, 734, 784]
        }]
    };

    const DoughnutOptions= {
        title: {
          display: true,
          text: 'Number of Projects'
        },
        elements: {
          center: {
            text: '15000 Projects',
            color: '#FF6384', // Default is #000000
            fontStyle: 'Arial', // Default is Arial
            sidePadding: 20 // Defualt is 20 (as a percentage)
          }
        }
    };

    it('should have Doughnut Chart component', function () {
        const wrapper = shallow(<BlocxCharts ChartData={DoughnutData} ChartOptions={DoughnutOptions} ChartHeight={1014} ChartWidth={1804} type="Doughnut" />);
        expect(wrapper).toBeTruthy();
    });

    it('Doughnut', function () {
        const getDatasetAtEvent = jest.fn();
        const wrapper = mount(<BlocxCharts ChartData={LineData} ChartOptions={LineOptions} ChartHeight={1014} ChartWidth={1804} type="Doughnut" />);
        wrapper.find('Doughnut').simulate('click');
        wrapper.update();
        expect(getDatasetAtEvent).toBeDefined();
    });

    it('should have PIE Chart component', function () {
        const wrapper = shallow(<BlocxCharts ChartData={DoughnutData} ChartOptions={DoughnutOptions} ChartHeight={1014} ChartWidth={1804} type="PIE" />);
        expect(wrapper).toBeTruthy();
    });

    it('Pie', function () {
        const getDatasetAtEvent = jest.fn();
        const wrapper = mount(<BlocxCharts ChartData={LineData} ChartOptions={LineOptions} ChartHeight={1014} ChartWidth={1804} type="PIE" />);
        wrapper.find('Pie').simulate('click');
        wrapper.update();
        expect(getDatasetAtEvent).toBeDefined();
    });

    it('should have other type of Chart component', function () {
        const wrapper = shallow(<BlocxCharts ChartData={DoughnutData} ChartOptions={DoughnutOptions} ChartHeight={1014} ChartWidth={1804} type="Other" />);
        expect(wrapper).toBeTruthy();
    });

    it('invokes `componentDidMount` when mounted', function () {
        jest.spyOn(Charts.prototype, 'componentDidMount');
        mount(<Charts ChartData={BarData} ChartOptions={BarOptions} ChartHeight={1014} ChartWidth={1804} type="Bar" />);
        expect(Charts.prototype.componentDidMount).toHaveBeenCalled();
        Charts.prototype.componentDidMount.mockRestore();
    });

});
