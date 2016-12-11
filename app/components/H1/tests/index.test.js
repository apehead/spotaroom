import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import H1 from '../index';

describe('<H1 />', () => {
  it('should render a prop', () => {
    const id = 'fakeId';
    const renderedComponent = shallow(
      <H1 id={id} />
    );

    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its children text', () => {
    const children = 'fake children text';
    const renderedComponent = shallow(
      <H1>{children}</H1>
    );

    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
