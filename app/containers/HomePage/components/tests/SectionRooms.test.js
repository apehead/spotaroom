import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import SectionRooms from '../SectionRooms';


describe('<SectionRooms />', () => {
  it('should render an <section> tag', () => {
    const renderedComponent = shallow(<SectionRooms />);
    expect(renderedComponent.type()).toEqual('section');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<SectionRooms />);
    expect(renderedComponent.prop('className')).toExist();
  });

  it('should adopt a valid attribute', () => {
    const id = 'fakeId';
    const renderedComponent = shallow(<SectionRooms id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<SectionRooms attribute={'fake'} />);
    expect(renderedComponent.prop('attribute')).toNotExist();
  });
});
