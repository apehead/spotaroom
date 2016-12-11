import SelectOption from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import { IntlProvider, defineMessages } from 'react-intl';
import React from 'react';

describe('<SelectOption />', () => {
  it('should render default language messages', () => {
    const defaultEnMessage = 'someContent';
    const message = defineMessages({
      enMessage: {
        id: 'app.components.fakeSelect',
        defaultMessage: defaultEnMessage
      }
    });

    const renderedComponent = shallow(
      <IntlProvider locale="en">
        <SelectOption value="en" message={message.enMessage} />
      </IntlProvider>
    );

    expect(renderedComponent.contains(<SelectOption value="en" message={message.enMessage} />)).toEqual(true);
  });
});
