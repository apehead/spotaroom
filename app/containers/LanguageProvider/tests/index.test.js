import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { FormattedMessage, defineMessages } from 'react-intl';

import LanguageProvider from '../index';
import configureStore from '../../../store';
import { browserHistory } from 'react-router';
import { translationMessages } from '../../../i18n';


describe('<LanguageProvider />', () => {
  let store;

  before(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render the default language messages', () => {
    const messages = defineMessages({
      someMessage: {
        id: 'fakeId',
        defaultMessage: 'This is some default message'
      }
    });

    const renderedComponent = shallow(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <FormattedMessage {...messages.someMessage} />
        </LanguageProvider>
      </Provider>
    );

    expect(renderedComponent.contains(<FormattedMessage {...messages.someMessage} />)).toEqual(true);
  });
});
