import React, { Component } from 'react';
import Buttons from "./buttons";
import chip from "../img/pig-chip.svg";
// change player name to winner
class Player extends Component {

  render() {
    return (
      <div className={this.props.playing===true || this.props.victory ? 'fl w-50-ns w-100' : 'fl w-50-ns w-100 gray-scale'}>
        <div className="ma3 pa2 white w-80 center">
          <h1>{this.props.name}</h1>

          <img src={chip} className="h3" />

          <h2>Roll</h2>
          <p>{this.props.roll}</p>
          <p>Dice: <span className="f3">{this.props.dice}</span></p>
          <p>Dice: <span className="f3">{this.props.dice2}</span></p>
          <h2>Running Total</h2>
          <p><span className="f3">{this.props.runningTotal}</span></p>
          <div className="bg-yellow w-50 tc center pa1 near-black">
            <h2 className="f5">Score</h2>
            <p className="f2 lh-copy">{this.props.score}</p>
          </div>
          <Buttons {...this.props} />
        </div>
      </div>
    );
  }
}

export default Player;
