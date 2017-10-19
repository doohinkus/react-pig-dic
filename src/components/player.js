import React, { Component } from 'react';
class Player extends Component {

  render() {
    return (
      <div className={this.props.playing ? 'player modal' : 'player'}>
        <h2 className={this.props.victory===true ? '' : 'hidden'}>
          Wins the Game!!!!!!
        </h2>
        <h1>{this.props.name}</h1>
        <h2>Roll</h2>
        <p>{this.props.roll}</p>
        <h2>Running Total</h2>
        <p>{this.props.runningTotal}</p>
        <h2>Score</h2>
        <p>{this.props.score}</p>
        <div className={this.props.playing===true && this.props.showButtons ? '' : 'hidden'}>
          <button onClick={this.props.onClickRoll}>Roll</button>
          <button onClick={this.props.onClickHold}>Hold</button>
        </div>
      </div>
    );
  }
}

export default Player;
