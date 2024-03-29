import expect from 'expect';
import { mount } from 'enzyme';
import React from 'react';

import ListItem from '../index';


describe('<ListItem />', () => {
  it('should have a className', () => {
    const renderedComponent = mount(<ListItem className="test" />);

    expect(renderedComponent.find('li').prop('className')).toExist();
  });

  it('should render the content passed to it', () => {
    const content = (<div>Fake content</div>);
    const renderedComponent = mount(
      <ListItem item={content} />
    );

    expect(renderedComponent.contains(content)).toEqual(true);
  });
});
