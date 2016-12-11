import expect from 'expect';
import { fromJS } from 'immutable';

import {
  selectGlobal,
  selectRooms,
  selectFeedId,
  selectLoading,
  selectError,
  selectLocationState
} from '../selectors';


describe('selectGlobal', () => {
  const globalSelector = selectGlobal();

  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState
    });

    expect(globalSelector(mockedState)).toEqual(globalState);
  });
});

describe('selectRooms', () => {
  const roomsSelector = selectRooms();

  it('should select the current rooms', () => {
    const rooms = fromJS(['fsake room 1', 'fake room 2', 'fake room 3']);
    const mockedState = fromJS({
      global: {
        rooms
      }
    });

    expect(roomsSelector(mockedState)).toEqual(rooms);
  });
});

describe('selectLoading', () => {
  const loadingSelector = selectLoading();

  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      global: {
        loading
      }
    });

    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('selectError', () => {
  const errorSelector = selectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = fromJS({
      global: {
        error
      }
    });

    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('selectFeedId', () => {
  const feedIdSelector = selectFeedId();

  it('should select the repos', () => {
    const feedId = 'feed-id';
    const mockedState = fromJS({
      global: {
        feedId
      }
    });

    expect(feedIdSelector(mockedState)).toEqual(feedId);
  });
});

describe('selectLocationState', () => {
  const locationStateSelector = selectLocationState();
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null
    });

    const mockedState = fromJS({
      route
    });

    expect(locationStateSelector(mockedState)).toEqual(route.toJS());
  });
});
