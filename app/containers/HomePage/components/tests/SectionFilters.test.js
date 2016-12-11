import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import SectionFilters from '../SectionFilters';


describe('<SectionFilters />', () => {
  it('should render an <section> tag', () => {
    const renderedComponent = shallow(<SectionFilters />);
    expect(renderedComponent.type()).toEqual('section');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<SectionFilters />);
    expect(renderedComponent.prop('className')).toExist();
  });

  it('should adopt a valid attribute', () => {
    const id = 'fakeId';
    const renderedComponent = shallow(<SectionFilters id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<SectionFilters attribute={'fake'} />);
    expect(renderedComponent.prop('attribute')).toNotExist();
  });
});
