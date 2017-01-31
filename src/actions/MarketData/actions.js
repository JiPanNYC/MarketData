import { LOAD_US_MARKET_REQUEST, LOAD_US_MARKET_SUCCESS, LOAD_US_MARKET_FAILURE } from '../../redux/modules/constants';

export function loadUSMarketData() {
  return {
    types: [LOAD_US_MARKET_REQUEST, LOAD_US_MARKET_SUCCESS, LOAD_US_MARKET_FAILURE],
    promise: (client) => client.get('/api/v1/marketdata/')
  };
}
