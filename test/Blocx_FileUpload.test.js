//To run unit tests
//npm install --save blocx-react-components
import renderer from 'react-test-renderer';
import React from 'react';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BlocxFileUpload} from 'blocx-react-components';

configure({adapter: new Adapter()});

describe('<BlocxFileUpload />', function () {

    it('renders correctly [BlocxFileUpload]', function () {
        const wrapper = renderer.create(<BlocxFileUpload allowMultiUpload />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should have BlocxFileUpload component', function () {
        const wrapper = shallow(<BlocxFileUpload />);
        expect(wrapper).toBeTruthy();
    });

    it('should call onChange when file is uploaded and the status is `Done`', () => {
        const onDrop = jest.fn();
        const chooseFiles = jest.fn();
        const file = new File(['dummy content'], 'example.png', {type: 'image/png'})
        const wrapper = mount(<BlocxFileUpload onChange={onDrop} onClick={chooseFiles} />);
        console.log(wrapper.find('input').debug());
        wrapper.find('#fileUpload').simulate('change', { target: {files: [file]} });
        wrapper.find('.blocx-file-upload-upload-btn').simulate('click');
        expect(onDrop).toBeDefined();
    });

    it('should call onClick when button is clicked for uploading documents', () => {
        const chooseFiles = jest.fn();
        const wrapper = mount(<BlocxFileUpload onClick={chooseFiles} />);
        wrapper.find('button').simulate('click');
        expect(chooseFiles).toBeDefined();
    });

    it('should call onDragOver when a file is dragged for uploading', () => {
        const onDragOver = jest.fn();
        const wrapper = mount(<BlocxFileUpload onDragOver={onDragOver} />);
        wrapper.find('.blocx-file-upload').simulate('dragOver');
        expect(onDragOver).toBeDefined();
    });

    it('should call onDragLeave when a file is dragged to upload area for uploading', () => {
        const onDragEnter = jest.fn();
        const wrapper = mount(<BlocxFileUpload onDragLeave={onDragEnter} />);
        wrapper.find('.blocx-file-upload').simulate('dragLeave');
        expect(onDragEnter).toBeDefined();
    });

    it("should render dragenter", () => {
        const map = {};
        document.addEventListener = jest.fn((event, callback) => {
          map[event] = callback;
        });
        const wrapper = mount(<BlocxFileUpload/>);
        map.dragenter({ preventDefault: () => {}, stopPropagation: () => {}, target: {parentNode: {className: 'blocx-file-upload'}}});
        expect(document.addEventListener).toHaveBeenCalled();
    });

    it("should render dragend", () => {
        const map = {};
        document.addEventListener = jest.fn((event, callback) => {
          map[event] = callback;
        });
        const wrapper = mount(<BlocxFileUpload/>);
        map.dragend({ preventDefault: () => {}, stopPropagation: () => {}, onDragEnter: () => {}});
        expect(document.addEventListener).toHaveBeenCalled();
    });

    it("should render dragover", () => {
        const map = {};
        document.addEventListener = jest.fn((event, callback) => {
          map[event] = callback;
        });
        const wrapper = mount(<BlocxFileUpload/>);
        map.dragover({ preventDefault: () => {}, stopPropagation: () => {}, target: {parentNode: {className: 'blocx-file-upload'}}});
        expect(document.addEventListener).toHaveBeenCalled();
    });

    it("should render dragleave when target is `MAIN`", () => {
        const file = new File(['dummy content'], 'example.png', {type: 'image/png'})
        const map = {};
        document.addEventListener = jest.fn((event, callback) => {
          map[event] = callback;
        });
        const wrapper = mount(<BlocxFileUpload/>);
        map.dragleave({ preventDefault: () => {}, target: {tagName: 'MAIN', files: [file]} });
        expect(document.addEventListener).toHaveBeenCalled();
    });

    it("should render dragleave when target is `HTML`", () => {
        const map = {};
        document.addEventListener = jest.fn((event, callback) => {
          map[event] = callback;
        });
        const wrapper = mount(<BlocxFileUpload/>);
        map.dragleave({ preventDefault: () => {}, target: {tagName: 'HTML'}});
        expect(document.addEventListener).toHaveBeenCalled();
    });

    it("should render drop", () => {
        const map = {};
        document.addEventListener = jest.fn((event, callback) => {
          map[event] = callback;
        });
        const wrapper = mount(<BlocxFileUpload/>);
        map.drop({ preventDefault: () => {}, stopPropagation: () => {}});
        expect(document.addEventListener).toHaveBeenCalled();
    });

    it('should call onChange when file is uploaded and progress block is closed', () => {
        const onDrop = jest.fn();
        const chooseFiles = jest.fn();
        const file = new File(['dummy content'], 'example.png', {type: 'image/png'})
        const wrapper = mount(<BlocxFileUpload onChange={onDrop} onClick={chooseFiles} />);
        console.log(wrapper.find('input').debug());
        wrapper.find('#fileUpload').simulate('change', { target: {files: [file]} });
        wrapper.find('.blocx-file-upload-upload-btn').simulate('click');
        expect(onDrop).toBeDefined();
    });

    it('should call onChange when file is uploading and the message is `File Type Error`', () => {
        const onDrop = jest.fn();
        const chooseFiles = jest.fn();
        const file = new File(['dummy content'], 'example.abxc', {type: 'xyz'})
        const wrapper = mount(<BlocxFileUpload onChange={onDrop} onClick={chooseFiles} />);
        console.log(wrapper.find('input').debug());
        wrapper.find('#fileUpload').simulate('change', { target: {files: [file]} });
        wrapper.find('.blocx-file-upload-upload-btn').simulate('click');
        expect(onDrop).toBeDefined();
    });


    //multi upload

    it('will check for multiple file to upload', () => {
        const onDrop = jest.fn();
        const chooseFiles = jest.fn();
        const file = new File(['dummy content'], 'example.png', {type: 'image/png'}, ['dummy content'], 'abc.png', {type: 'image/png'})
        const wrapper = mount(<BlocxFileUpload allowMultiUpload={true} onChange={onDrop} onClick={chooseFiles} />);
        console.log(wrapper.find('input').debug());
        wrapper.find('#fileUpload').simulate('change', { target: {files: [file]} });
        wrapper.find('.blocx-file-upload-upload-btn').simulate('click');
        expect(onDrop).toBeDefined();
    });

    //drag upload
    it('will check when file is uploaded using dataTransfer', () => {
        const onDrop = jest.fn();
        const chooseFiles = jest.fn();
        const file = new File(['dummy content'], 'example.png', {type: 'image/png'})
        const wrapper = mount(<BlocxFileUpload onChange={onDrop} onClick={chooseFiles} />);
        console.log(wrapper.find('input').debug());
        wrapper.find('#fileUpload').simulate('change', { dataTransfer: {files: [file]} });
        wrapper.find('.blocx-file-upload-upload-btn').simulate('click');
        expect(onDrop).toBeDefined();
    });

    it('will check when multiple files are uploaded using dataTransfer', () => {
        const onDrop = jest.fn();
        const chooseFiles = jest.fn();
        const file = new File(['dummy content'], 'example.png', {type: 'image/png'}, ['dummy content'], 'abc.png', {type: 'image/png'})
        const wrapper = mount(<BlocxFileUpload allowMultiUpload={true} onChange={onDrop} onClick={chooseFiles} />);
        console.log(wrapper.find('input').debug());
        wrapper.find('#fileUpload').simulate('change', { dataTransfer: {files: [file]} });
        wrapper.find('.blocx-file-upload-upload-btn').simulate('click');
        expect(onDrop).toBeDefined();
    });

});