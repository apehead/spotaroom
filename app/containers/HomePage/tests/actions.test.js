import expect from 'expect';

import {
  CHANGE_FILTER_PRICE,
  CHANGE_FILTER_PROPERTY
} from '../constants';

import {
  changeFilterPrice,
  changeFilterProperty
} from '../actions';


describe('Home Actions', () => {
  describe('changeFilterPrice', () => {
    it('should return the correct type and the passed value', () => {
      const value = 'fake value';
      const expectedResult = {
        type: CHANGE_FILTER_PRICE,
        payload: { value }
      };

      expect(changeFilterPrice(value)).toEqual(expectedResult);
    });
  });

  describe('changeFilterProperty', () => {
    it('should return the correct type and the passed value', () => {
      const value = 'fake value';
      const expectedResult = {
        type: CHANGE_FILTER_PROPERTY,
        payload: { value }
      };

      expect(changeFilterProperty(value)).toEqual(expectedResult);
    });
  });
});
