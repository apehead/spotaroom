import expect from 'expect';
import { shallow } from 'enzyme';
// import { IntlProvider, definseMessages } from 'react-intl';
import React from 'react';

import Select from '../index';


describe('<Select />', () => {
  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Select attribute={'test'} />);

    expect(renderedComponent.prop('attribute')).toNotExist();
  });

  // TODO: test options
});
