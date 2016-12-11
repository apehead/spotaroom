# Spotaroom

A sample app made with React.

## Installation

1. Clone this repo using `git clone https://github.com/apehead/spotaroom.git`
2. Run `yarn install` or `npm install` to install dependencies

## Commands


#### Development

```Shell
npm run start
```

Starts the development server and makes your application accessible at
`localhost:3000`. Tunnels that server with `ngrok`, which means the website
accessible anywhere.

#### Port

To change the port the app is accessible at pass the `--port` option to the command
with `--`. E.g. to make the app visible at `localhost:5000`, run the following:
`npm start -- --port 5000`

#### Unit testing

```Shell
npm run test
```

Tests the application with the unit tests specified in the `*test.js` files
throughout the application.

#### Browsers

To choose the browser to run the unit tests in (Chrome by default), run one of
the following commands:

##### Firefox

```Shell
npm run test:firefox
```

##### Safari

```Shell
npm run test:safari
```

##### Internet Explorer

```Shell
npm run test:ie
```

#### Watching

```Shell
npm run test:watch
```

Watches changes in the application and reruns tests whenever a file changes.

#### Linting

```Shell
npm run lint
```

Lints the code.

## About the project

This project is based on the [react-boilerplate](https://github.com/mxstbr/react-boilerplate) (my favorite React boilerplate out there) that enforces best practices.

In addition to React, in this project I have also used:

- [styled components](https://github.com/styled-components/styled-components) for styling React components
- [React Router](https://github.com/ReactTraining/react-router) as routing library
- [Redux](https://github.com/reactjs/redux) as state container
- [Immutable](https://github.com/facebook/immutable-js/) and [redux-immutable](https://github.com/gajus/redux-immutable) for immutability to increase efficiency
- [redux-saga](https://github.com/yelouafi/redux-saga) for handling side effects
- [reselect](https://github.com/reactjs/reselect), an efficient selector library for Redux
- [React Intl](https://github.com/yahoo/react-intl) for internationalization
- [React Helmet](https://github.com/nfl/react-helmet) as document head manager

Some of these tools have been used to learn and have fun, but not because of real application needs. The idea was to show an interesting application ready for production.


This project is under development.
