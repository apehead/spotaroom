import 'babel-polyfill';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

const context = require.context('../../app', true, /^^((?!(app|reducers|routes)).)*\.js$/);
context.keys().forEach(context);
