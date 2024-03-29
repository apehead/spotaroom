import expect from 'expect';
import { mount } from 'enzyme';
import React from 'react';

import Button from '../index';

const handleRoute = () => {};
const href = 'http://fake-url.com';
const children = (<h1>Test</h1>);
const renderComponent = (props = {}) => mount(
  <Button href={href} {...props}>
    {children}
  </Button>
);

describe('<Button />', () => {
  it('should render an <a> tag if no route is specified', () => {
    const renderedComponent = renderComponent({ href });
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should render a <button> tag to change route if the handleRoute prop is specified', () => {
    const renderedComponent = renderComponent({ handleRoute });
    expect(renderedComponent.find('button').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('a').prop('className')).toExist();
  });

  it('should handle click events', () => {
    const onClickSpy = expect.createSpy();
    const renderedComponent = renderComponent({ onClick: onClickSpy });
    renderedComponent.find('a').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
