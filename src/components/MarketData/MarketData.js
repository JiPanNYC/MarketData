import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SlySlider from '../SlySlider/SlySlider';

@connect(
  state => ({
    usmarketdata: state.usmarketdata,
  }))

export default class MarketData extends Component {
  static propTypes = {
    usmarketdata: PropTypes.object.isRequired,
  };

  constructor(props) {
    super();
    this.state = {
        count: 0
    }
  }

  _increment() {
    if (this.state.count < 1){
      this.setState({
        count: this.state.count + 1
      });
    }
  }

  _decrement() {
    if (this.state.count > 0){
      this.setState({
        count: this.state.count - 1
      });
    }
  }

  createCells(usData) {
    const cellContents = [];
    for (let i = 0; i < usData.length; i++){
      const secondDimendata = [];
      for (let j = 0; j < usData[i].length; j ++) {
        secondDimendata.push(<span key={usData[i][j].key} className={usData[i][j].classNameFlag}>{usData[i][j].data}</span>);
      }
      cellContents.push(secondDimendata);
    }
    return cellContents;
  }
 
  render() {
    const { usmarketdata } = this.props;
    const usData = usmarketdata.usmarketdata;
    const cellContents = this.createCells(usData);
      
    return ( 
      <div className="wrap">
        <div className="marketdata">
          <button className="btn prevPage">
            <i className="icon-chevron-left"></i>
            <span className="glyphicon glyphicon-menu-left" onClick={this._decrement.bind(this)} aria-hidden={true}></span>
          </button>
          <button className="btn nextPage">
            <span className="glyphicon glyphicon-menu-right" onClick={this._increment.bind(this)} aria-hidden={true}></span>
            <i className="icon-chevron-right"></i>
          </button>
          <SlySlider marginCounter={this.state.count} cellContents = {cellContents} />
        </div>
      </div>
    );
  }
}


