import React, { Component } from 'react';
import Buttons from "./buttons";

class Player extends Component {

  render() {
    return (
      <div className={this.props.playing===true ? 'fl w-50-ns w-100' : 'fl w-50-ns w-100'}>
        <div className="ma3 shadow-5 pa2 bg-lightest-blue w-80 center">
          <h2 className={this.props.victory===true ? '' : 'hide'}>
            Wins the Game!!!!!!
          </h2>
          <h1>{this.props.name}</h1>
          <h2>Roll</h2>
          <p>{this.props.roll}</p>
          <p>Dice: {this.props.dice}</p>
          <p>Dice: {this.props.dice2}</p>
          <h2>Running Total</h2>
          <p>{this.props.runningTotal}</p>
          <div className="bg-light-blue w-50 tc center pa1 white">
            <h2 className="f5">Score</h2>
            <p className="f3 lh-copy">{this.props.score}</p>
          </div>
          <Buttons {...this.props} />
        </div>
      </div>
    );
  }
}

export default Player;
