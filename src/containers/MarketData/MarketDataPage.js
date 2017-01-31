import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadUSMarketData } from '../../actions/MarketData/actions';
import { isLoaded as usmarketdataIsLoaded } from 'redux/modules/usmarketdata';
import { asyncConnect } from 'redux-async-connect';
import MarketData from 'components';
import { Col } from 'react-bootstrap';


@asyncConnect([{
  deferred: true,
  promise: ({store: {dispatch, getState}}) => {
    if (!usmarketdataIsLoaded(getState())) {
      return dispatch(loadUSMarketData());
    }
  }
},])

@connect(
  state => ({
    usmarketdata: state.usmarketdata,
  }))

export default class MarketDataPage extends Component {
  static propTypes = {
    usmarketdata: PropTypes.object.isRequired,
  };

  render() {
    const { usmarketdata } = this.props;
    
    return (
      <Col className="container">
        <div className="row news-row clearfix">
          <Col className="news-content" xs={12} md={12}>
            <MarketData usmarketdata = {usmarketdata} />
          </Col>
        </div>
      </Col>
    );
  }
}
