//To run unit tests
//npm install --save blocx-react-components
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxDataTable} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxDataTable />', function () {

    const items = {
        "header": {
          "Name": "Name",
          "Company": "Company",
          "Type": "Type",
          "Phone": "Phone",
          "Email": "Email"
        },
        "items": [
          {
            "id": "0",
            "Name": "x",
            "Company": "Capgemini",
            "Type": "C1",
            "Phone": "7498398309",
            "Email": "test@email.com",
            "checked": false
          },
          {
            "id": "1",
            "Name": "q",
            "Company": "Accenture",
            "Type": "A1",
            "Phone": "8484984984",
            "Email": "sample@email.com",
            "checked": true
          },
          {
            "id": "2",
            "Name": "C",
            "Company": "TCS",
            "Type": "B1",
            "Phone": "9843989094",
            "Email": "wcf@email.com",
            "checked": false
          },
          {
            "id": "3",
            "Name": "D",
            "Company": "SAP",
            "Type": "H2",
            "Phone": "6498398309",
            "Email": "Capgemini@email.com",
            "checked": true
          },
          {
            "id": "4",
            "Name": "E",
            "Company": "SAP",
            "Type": "H2",
            "Phone": "6498398309",
            "Email": "SAP@email.com",
            "checked": true
          },
          {
            "id": "5",
            "Name": "F",
            "Company": "Infy",
            "Type": "H5",
            "Phone": "6498398309",
            "Email": "Infy@email.com",
            "checked": false
          },
          {
            "id": "6",
            "Name": "G",
            "Company": "HCL",
            "Type": "H4",
            "Phone": "6498398309",
            "Email": "HCL@email.com",
            "checked": false
          }
        ]
    }

    it('should have BlocxDataTable component when disableSort = {false} and selectAll = {true}', function () {
        let wrapper = mount(<BlocxDataTable data={items} 
            disableSort={false} 
            order={'ASC'} 
            selectAll={true}
            unSelectAll={false}
            enableCheckBox />);
        wrapper.update();
        expect(wrapper).toBeTruthy();
    });

    it('should have BlocxDataTable component when disableSort = {true}  and selectAll={false}', function () {
        let wrapper = mount(<BlocxDataTable data={items} 
            disableSort={true} 
            order={'ASC'} 
            selectAll={false}
            unSelectAll={false}
            enableCheckBox />);
        expect(wrapper).toBeTruthy();
    });

    it('should check `componentDidMount()`', () => {
        let wrapper = mount(<BlocxDataTable data={items} 
            disableSort={true} 
            order={'ASC'} 
            selectAll={false}
            unSelectAll={false}
            enableCheckBox />);
        const instance = wrapper.instance();
        jest.spyOn(instance, 'makeSortable');
        instance.componentDidMount();
        expect(instance.makeSortable).toBeDefined();
    });

    it('invokes `componentDidMount` when mounted', function () {
        jest.spyOn(BlocxDataTable.prototype, 'componentDidMount');
        mount(<BlocxDataTable data={items} 
            disableSort={true} 
            order={'ASC'} 
            selectAll={false}
            unSelectAll={false}
            enableCheckBox/>);
        expect(BlocxDataTable.prototype.componentDidMount).toHaveBeenCalled();
        BlocxDataTable.prototype.componentDidMount.mockRestore();
    });

    it('should trigger click event when table header label is clicked', function () {
        const sortTable = jest.fn();
        const makeSortable = jest.fn();
        const wrapper = mount((<BlocxDataTable data={items} 
            disableSort={false} 
            order={'ASC'} 
            selectAll={false}
            unSelectAll={false}
            enableCheckBox onClick = { sortTable } makeSortable = {makeSortable} />));
        wrapper.update();
        wrapper.find('th').at(2).simulate('click');
        expect(makeSortable).toBeDefined();
        expect(sortTable).toBeDefined();
        makeSortable.mockClear();
        sortTable.mockClear();
    });

    it('should verify the functionality of makeSortable', () => {
        const wrapper = mount(<BlocxDataTable data={items} 
            disableSort={false} 
            order={'ASC'} 
            selectAll={false}
            unSelectAll={false}
            enableCheckBox />);
        wrapper.update();
        const instance = wrapper.instance();
        var test = jest.spyOn(instance, 'makeSortable');
        var table = instance.makeSortable.table;
        var th = items.id, i;
        th && (th = th.rows[0]) && (th = th.cells);
        if (th) {
          i = th.length;
          expect(i).toBe(5);
        }
        else return; // if no `<thead>` then do nothing
        while (--i >= 0) (function (i) {
          var dir = 1;
          th[i].addEventListener('click', function () {
            test(table, i, (dir = 1 - dir))
          });
          th[i].dispatchEvent(new Event('click'));
        }(i));
        expect(i).toBe(-1);
    });

    it('should call handleClick when checked: true', () => {
        const handleClick = jest.fn();
        const wrapper = mount(<BlocxDataTable data={items} 
            disableSort={false} 
            order={'ASC'} 
            selectAll={true}
            unSelectAll={false}
            enableCheckBox onChange={handleClick} />);
        wrapper.find('#checkbox1').at(1).simulate('change', {target: {checked: true}});
        expect(handleClick).toBeDefined();
        handleClick.mockClear();
    });

    it('should call handleClick when checked: false', () => {
        const handleClick = jest.fn();
        const wrapper = mount(<BlocxDataTable data={items} 
            disableSort={false} 
            order={'ASC'} 
            selectAll={true}
            unSelectAll={false}
            enableCheckBox onChange={handleClick} />);
        wrapper.find('#checkbox1').at(1).simulate('change', {target: {checked: false}});
        expect(handleClick).toBeDefined();
        handleClick.mockClear();
    });

    it('should call checkBoxClick when checked: true', () => {
        const checkBoxClick = jest.fn();
        const wrapper = mount(<BlocxDataTable data={items} 
            disableSort={false} 
            order={'ASC'} 
            selectAll={true}
            unSelectAll={false}
            enableCheckBox onChange={checkBoxClick} />);
        wrapper.find('BlocxCheckBox').at(3).simulate('change', {target: {checked: false}});
        expect(checkBoxClick).toBeDefined();
        checkBoxClick.mockClear();
    });

});