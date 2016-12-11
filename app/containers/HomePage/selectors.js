import { createSelector } from 'reselect';
import { selectRooms } from 'containers/App/selectors';
import { orderBy } from 'lodash';
import {
  FILTER_PRICE_DESC,
  FILTER_PROPERTY_ALL
} from './constants';


const orderRoomsByPrice = (rooms, order) => {
  if (!rooms) {
    return rooms;
  }

  return orderBy(rooms, ['pricePerMonth'], [order === FILTER_PRICE_DESC ? 'desc' : 'asc']);
};

const filterRoomsByPropertyType = (rooms, property) => {
  if (!rooms || property === FILTER_PROPERTY_ALL) {
    return rooms;
  }

  return rooms.filter((room) => room.type === property);
};


const selectHome = () => (state) => state.get('home');

const selectFilterPrice = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('filterPrice')
);

const selectFilterProperty = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('filterProperty')
);

const selectPriceRooms = () => createSelector(
  selectRooms(),
  selectFilterPrice(),
  (rooms, order) => orderRoomsByPrice(rooms, order)
);

const selectPropertyTypeRooms = () => createSelector(
  selectRooms(),
  selectFilterProperty(),
  (rooms, property) => filterRoomsByPropertyType(rooms, property)
);

const selecFilteredRooms = () => createSelector(
  selectPropertyTypeRooms(),
  selectFilterPrice(),
  (rooms, order) => orderRoomsByPrice(rooms, order)
);


export {
  selectHome,
  selectFilterPrice,
  selectFilterProperty,
  selectPriceRooms,
  selectPropertyTypeRooms,
  selecFilteredRooms
};
