import expect from 'expect';
import { takeLatest } from 'redux-saga';
import { take, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { LOAD_ROOMS } from 'containers/App/constants';
import { roomsLoaded, roomsLoadedError } from 'containers/App/actions';
import { getRooms, getRoomsWatcher, roomsData } from '../sagas';


describe('getRooms Saga', () => {
  let getRoomsGenerator;

  beforeEach(() => {
    getRoomsGenerator = getRooms();
    getRoomsGenerator.next();
    getRoomsGenerator.next();
  });

  it('should dispatch the roomsLoaded action if it requests the data successfully', () => {
    const response = { data: { homecards: [] } };
    const putDescriptor = getRoomsGenerator.next(response).value;

    expect(putDescriptor).toEqual(put(roomsLoaded(response)));
  });

  it('should call the roomsLoadedError action if the response errors', () => {
    const response = new Error('fake error');
    const putDescriptor = getRoomsGenerator.throw(response).value;

    expect(putDescriptor).toEqual(put(roomsLoadedError(response)));
  });
});

describe('getRoomsWatcher Saga', () => {
  const getRoomsWatcherGenerator = getRoomsWatcher();

  it('should watch for LOAD_ROOMS action', () => {
    const takeDescriptor = getRoomsWatcherGenerator.next().value;

    expect(takeDescriptor).toEqual(fork(takeLatest, LOAD_ROOMS, getRooms));
  });
});

describe('roomsDataSaga Saga', () => {
  let forkDescriptor;
  const roomsDataSaga = roomsData();

  it('should asyncronously fork getRoomsWatcher saga', () => {
    forkDescriptor = roomsDataSaga.next();

    expect(forkDescriptor.value).toEqual(fork(getRoomsWatcher));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = roomsDataSaga.next();

    expect(takeDescriptor.value).toEqual(take(LOCATION_CHANGE));
  });

  it('should finally cancel the forked getRoomsWatcher saga',
     function* roomsDataSagaCancellable() {
       forkDescriptor = roomsDataSaga.next(put(LOCATION_CHANGE));

       expect(forkDescriptor.value).toEqual(cancel(forkDescriptor));
     }
   );
});
