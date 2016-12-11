import expect from 'expect';
import { render } from 'enzyme';
import React from 'react';

import Loading from '../index';

describe('<Loading />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = render(
      <Loading />
    );

    expect(renderedComponent.find('div').length).toEqual(1);
  });

  it('should render an <i> tag', () => {
    const renderedComponent = render(
      <Loading />
    );

    expect(renderedComponent.find('i').length).toEqual(1);
  });
});
