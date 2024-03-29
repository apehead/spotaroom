import { addLocaleData } from 'react-intl';
import { DEFAULT_LOCALE } from 'containers/App/constants';

import enLocaleData from 'react-intl/locale-data/en';
import enTranslationMessages from './translations/en.json';


addLocaleData([...enLocaleData]);

export const appLocales = [
  'en'
];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE ?
    formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};

  const formattedMessages = {};
  const messageKeys = Object.keys(messages);

  for (const messageKey of messageKeys) {
    if (locale === DEFAULT_LOCALE) {
      formattedMessages[messageKey] = messages[messageKey];
    } else {
      formattedMessages[messageKey] = messages[messageKey] || defaultFormattedMessages[messageKey];
    }
  }

  return formattedMessages;
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages)
};
