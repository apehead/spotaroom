import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Ul from '../Ul';

describe('<Ul />', () => {
  it('should render an <ul> tag', () => {
    const renderedComponent = shallow(<Ul />);
    expect(renderedComponent.type()).toEqual('ul');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Ul />);
    expect(renderedComponent.prop('className')).toExist();
  });

  it('should adopt a valid attribute', () => {
    const id = 'fakeId';
    const renderedComponent = shallow(<Ul id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Ul attribute={'fake'} />);
    expect(renderedComponent.prop('attribute')).toNotExist();
  });
});
