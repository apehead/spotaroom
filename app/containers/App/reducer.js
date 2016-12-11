import { fromJS } from 'immutable';
import {
  DEFAULT_FEED_ID,
  CHANGE_FEED,
  LOAD_ROOMS,
  LOAD_ROOMS_RESPONSE
} from './constants';


const initialState = fromJS({
  loading: false,
  error: false,
  rooms: false,
  feedId: DEFAULT_FEED_ID
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FEED:
      return state
        .set('feedId', action.payload.feedId);

    case LOAD_ROOMS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('rooms', []);

    case LOAD_ROOMS_RESPONSE:
      return action.error ?
        state
          .set('error', action.error)
          .set('loading', false)
        :
        state
          .set('rooms', action.payload.rooms)
          .set('loading', false);

    default:
      return state;
  }
}

export default appReducer;
