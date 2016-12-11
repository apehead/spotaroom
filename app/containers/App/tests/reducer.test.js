import expect from 'expect';
import { fromJS } from 'immutable';

import { DEFAULT_FEED_ID } from '../constants';
import {
  loadRooms,
  roomsLoaded,
  roomsLoadedError,
  changeFeed
} from '../actions';
import appReducer from '../reducer';


describe('appReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      rooms: false,
      feedId: DEFAULT_FEED_ID
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadRooms action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('rooms', []);

    expect(appReducer(state, loadRooms())).toEqual(expectedResult);
  });

  it('should handle the roomsLoaded action correctly', () => {
    const fakeHomecards = ['fake homecard 1', 'fake homecard 2'];
    const fixture = {
      data: {
        homecards: fakeHomecards
      }
    };

    const expectedResult = state
      .set('rooms', fakeHomecards)
      .set('loading', false);

    expect(appReducer(state, roomsLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the roomsLoadedError action correctly', () => {
    const fakeError = 'fake error';

    const expectedResult = state
      .set('error', true)
      .set('loading', false);

    expect(appReducer(state, roomsLoadedError(fakeError))).toEqual(expectedResult);
  });

  it('should handle the changeFeed action correctly', () => {
    const fakeFeedId = 'fake feed id';

    const expectedResult = state
      .set('feedId', fakeFeedId);

    expect(appReducer(state, changeFeed(fakeFeedId))).toEqual(expectedResult);
  });
});
