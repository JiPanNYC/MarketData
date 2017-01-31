import {
  LOAD_US_MARKET_REQUEST, LOAD_US_MARKET_SUCCESS, LOAD_US_MARKET_FAILURE
} from './constants';

const initialState = {
  isFetching: false,
  loaded: false,
  usmarketdata: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_US_MARKET_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        loaded: false,
      });
    case LOAD_US_MARKET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        loaded: true,
        usmarketdata: action.result
      });
    case LOAD_US_MARKET_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.usmarketdata && globalState.usmarketdata.loaded;
}
