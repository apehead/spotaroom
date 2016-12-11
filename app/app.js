import 'babel-polyfill';

/* -ask;eslint-disable import/no-unresolved, import/extensions */
import 'file?name=[name].[ext]!./favicon.ico';
/* -alkseslint-enable import/no-unresolved, import/extensions */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';

import { translationMessages } from './i18n';
import createRoutes from './routes';
import configureStore from './store';
import App from 'containers/App';
import { selectLocationState } from 'containers/App/selectors';
import LanguageProvider from 'containers/LanguageProvider';

import 'sanitize.css/sanitize.css';
import 'styles/global-styles';


const initialState = {};
const store = configureStore(initialState, browserHistory);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState()
});

const rootRoute = {
  component: App,
  childRoutes: createRoutes(store)
};

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <Router
          history={history}
          routes={rootRoute}
          render={applyRouterMiddleware(useScroll())}
        />
      </LanguageProvider>
    </Provider>,
    document.getElementById('app')
  );
};

if (module.hot) {
  module.hot.accept('./i18n', () => {
    render(translationMessages);
  });
}

if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(System.import('intl'));
  }))
    .then(() => Promise.all([
      System.import('intl/locale-data/jsonp/en.js')
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}
