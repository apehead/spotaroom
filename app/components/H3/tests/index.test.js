import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import H3 from '../index';

describe('<H3 />', () => {
  it('should render a prop', () => {
    const id = 'fakeId';
    const renderedComponent = shallow(
      <H3 id={id} />
    );

    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its children text', () => {
    const children = 'fake children text';
    const renderedComponent = shallow(
      <H3>{children}</H3>
    );

    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
