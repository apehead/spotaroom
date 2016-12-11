import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Icon from '../index';

const icon = 'fake-icon';
const renderComponent = (props = {}) => shallow(
  <Icon icon={icon} {...props} />
);


describe('<Icon />', () => {
  it('should render an icon', () => {
    const renderedComponent = renderComponent();

    expect(renderedComponent.find('i').length).toEqual(1);
  });

  it('should render the right icon', () => {
    const expectedIcon = 'fa fa-fake-icon';
    const renderedComponent = renderComponent();

    expect(renderedComponent.prop('className')).toEqual(expectedIcon);
  });

  it('should have an aria-hidden attribute', () => {
    const renderedComponent = renderComponent();

    expect(renderedComponent.prop('aria-hidden')).toEqual('true');
  });
});
