import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent.prop('className')).toExist();
  });

  it('should adopt a valid attribute', () => {
    const id = 'fakeId';
    const renderedComponent = shallow(<Wrapper id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Wrapper attribute={'fake'} />);
    expect(renderedComponent.prop('attribute')).toNotExist();
  });
});
