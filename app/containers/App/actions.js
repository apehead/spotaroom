import {
  CHANGE_FEED,
  LOAD_ROOMS,
  LOAD_ROOMS_RESPONSE,
  DEFAULT_FEED_ID
} from './constants';


export function changeFeed(feedId) {
  return {
    type: CHANGE_FEED,
    payload: { feedId }
  };
}

export function loadRooms(feedId = DEFAULT_FEED_ID) {
  return {
    type: LOAD_ROOMS,
    payload: { feedId }
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
