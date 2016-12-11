import expect from 'expect';
import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import {
  changeFilterPrice,
  changeFilterProperty
} from '../actions';
import {
  DEFAULT_FILTER_PRICE,
  DEFAULT_FILTER_PROPERTY
} from 'containers/App/constants';


describe('homeReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      filterPrice: DEFAULT_FILTER_PRICE,
      filterProperty: DEFAULT_FILTER_PROPERTY
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeFilterPrice action correctly', () => {
    const fixture = 'fake value filter price';
    const expectedResult = state.set('filterPrice', fixture);

    expect(homeReducer(state, changeFilterPrice(fixture))).toEqual(expectedResult);
  });

  it('should handle the changeFilterProperty action correctly', () => {
    const fixture = 'fake value filter property';
    const expectedResult = state.set('filterProperty', fixture);

    expect(homeReducer(state, changeFilterProperty(fixture))).toEqual(expectedResult);
  });
});
