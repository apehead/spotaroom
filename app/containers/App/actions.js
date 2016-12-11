import {
  CHANGE_FEED,
  LOAD_ROOMS,
  LOAD_ROOMS_RESPONSE
} from './constants';


export function changeFeed(feedId) {
  return {
    type: CHANGE_FEED,
    payload: { feedId }
  };
}

export function loadRooms() {
  return {
    type: LOAD_ROOMS
  };
}

export function roomsLoaded(response) {
  const rooms = response.data.homecards;

  return {
    type: LOAD_ROOMS_RESPONSE,
    payload: { rooms }
  };
}

export function roomsLoadedError(error) {
  return {
    type: LOAD_ROOMS_RESPONSE,
    payload: new Error(error),
    error: true
  };
}
