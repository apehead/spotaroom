import { fromJS } from 'immutable';

import {
  CHANGE_FILTER_PRICE,
  CHANGE_FILTER_PROPERTY
} from './constants';
import {
  DEFAULT_FILTER_PRICE,
  DEFAULT_FILTER_PROPERTY
} from 'containers/App/constants';


const initialState = fromJS({
  filterPrice: DEFAULT_FILTER_PRICE,
  filterProperty: DEFAULT_FILTER_PROPERTY
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER_PRICE:
      return state
        .set('filterPrice', action.payload.value);

    case CHANGE_FILTER_PROPERTY:
      return state
        .set('filterProperty', action.payload.value);

    default:
      return state;
  }
}


export default homeReducer;
