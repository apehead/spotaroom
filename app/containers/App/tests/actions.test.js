import expect from 'expect';

import {
  LOAD_ROOMS,
  LOAD_ROOMS_RESPONSE,
  CHANGE_FEED,
  DEFAULT_FEED_ID
} from '../constants';

import {
  loadRooms,
  roomsLoaded,
  roomsLoadedError,
  changeFeed
} from '../actions';


describe('App Actions', () => {
  describe('loadRooms', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_ROOMS,
        payload: { feedId: DEFAULT_FEED_ID }
      };

      expect(loadRooms()).toEqual(expectedResult);
    });
  });

  describe('roomsLoaded', () => {
    it('should return the correct type and passed homecards', () => {
      const fakeHomecards = ['fake 1', 'fake 2'];
      const response = { data: { homecards: fakeHomecards } };
      const expectedResult = {
        type: LOAD_ROOMS_RESPONSE,
        payload: { rooms: fakeHomecards }
      };

      expect(roomsLoaded(response)).toEqual(expectedResult);
    });
  });

  describe('roomsLoadedError', () => {
    it('should return the correct type and the error', () => {
      const fakeError = 'Fake error';
      const expectedResult = {
        type: LOAD_ROOMS_RESPONSE,
        payload: new Error(fakeError),
        error: true
      };

      expect(roomsLoadedError(fakeError)).toEqual(expectedResult);
    });
  });

  describe('changeFeed', () => {
    it('should return the correct type and feed id', () => {
      const fakeFeedId = 'fake-feed-id';
      const expectedResult = {
        type: CHANGE_FEED,
        payload: { feedId: fakeFeedId }
      };

      expect(changeFeed(fakeFeedId)).toEqual(expectedResult);
    });
  });
});
