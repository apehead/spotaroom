import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import H2 from '../index';

describe('<H2 />', () => {
  it('should render a prop', () => {
    const id = 'fakeId';
    const renderedComponent = shallow(<H2 id={id} />);

    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its children text', () => {
    const children = 'fake children text';
    const renderedComponent = shallow(<H2>{children}</H2>);

    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
