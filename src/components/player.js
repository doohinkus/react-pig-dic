import React, { Component } from 'react';
class Player extends Component {

  render() {
    return (
      <div className={this.props.playing===true ? 'fl w-50 pa2 tc' : 'fl w-50 pa2 tc'}>
        <h2 className={this.props.victory===true ? '' : 'hide'}>
          Wins the Game!!!!!!
        </h2>
        <h1>{this.props.name}</h1>
        <h2>Roll</h2>
        <p>{this.props.roll}</p>
        <h2>Running Total</h2>
        <p>{this.props.runningTotal}</p>
        <h2>Score</h2>
        <p>{this.props.score}</p>
        <div className={this.props.playing===true && this.props.showButtons ? '' : 'hide'}>
          <a onClick={this.props.onClickRoll} className="f6 link dim ph3 mh3 pv2 mb2 dib white bg-hot-pink pointer">Roll</a>
          <a onClick={this.props.onClickHold} className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue pointer">Hold</a>
        </div>
      </div>
    );
  }
}

export default Player;
