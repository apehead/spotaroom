import React from 'react';
import expect from 'expect';
import { mount, render } from 'enzyme';

import HeaderLink from '../HeaderLink';

describe('<HeaderLink />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = render(<HeaderLink />);
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should have a className attribute', () => {
    const renderedComponent = mount(<HeaderLink />);
    expect(renderedComponent.find('a').prop('className')).toExist();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = mount(<HeaderLink id={id} />);
    expect(renderedComponent.find('a').prop('id')).toEqual(id);
  });
});
