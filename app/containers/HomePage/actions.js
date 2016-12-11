import {
  CHANGE_FILTER_PRICE,
  CHANGE_FILTER_PROPERTY
} from './constants';


export function changeFilterPrice(value) {
  return {
    type: CHANGE_FILTER_PRICE,
    payload: { value }
  };
}

export function changeFilterProperty(value) {
  return {
    type: CHANGE_FILTER_PROPERTY,
    payload: { value }
  };
}
