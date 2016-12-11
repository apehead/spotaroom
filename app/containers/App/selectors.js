import { createSelector } from 'reselect';


const selectGlobal = () => (state) => state.get('global');

const selectRooms = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('rooms')
);

const selectFeedId = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('feedId')
);

const selectLoading = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('loading')
);

const selectError = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('error')
);

const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route');

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  selectRooms,
  selectFeedId,
  selectLoading,
  selectError,
  selectLocationState
};
