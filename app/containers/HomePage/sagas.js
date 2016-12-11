import { takeLatest } from 'redux-saga';
import { take, call, put, /* select, */ fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import request from 'utils/request';
import { LOAD_ROOMS } from 'containers/App/constants';
// import { selectFeedId } from 'containers/App/selectors';
import { roomsLoaded, roomsLoadedError } from 'containers/App/actions';


export function* getRooms(action) {
  const { feedId } = action.payload;
  // const feedId = yield select(selectFeedId());
  const requestURL = `spotahome/api/public/listings/search/homecards/${feedId}`;

  try {
    const rooms = yield call(request, requestURL);
    yield put(roomsLoaded(rooms));
  } catch (err) {
    yield put(roomsLoadedError(err));
  }
}

export function* getRoomsWatcher() {
  yield fork(takeLatest, LOAD_ROOMS, getRooms);
}

export function* roomsData() {
  const watcher = yield fork(getRoomsWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


export default [
  roomsData
];
