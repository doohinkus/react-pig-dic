import React, { Component } from 'react';
import Buttons from "./buttons";
import chip from "../img/pig-chip.svg";
import one from "../img/1.svg";
import two from "../img/2.svg";
import three from "../img/3.svg";
import four from "../img/4.svg";
import five from "../img/5.svg";
import six from "../img/6.svg";


class Player extends Component {
  // this.props.dice2
  render() {
    let imgs = [
      "",
      one,
      two,
      three,
      four,
      five,
      six
    ]
    return (
      <div className={this.props.playing===true || this.props.victory ? 'fl w-50-ns w-100' : 'fl w-50-ns w-100 gray-scale'}>
        <div className="ma3 pa2 white w-80 center">
          <h1>{this.props.name}</h1>

          <img src={chip} className="h3" />

          <h2 className="mb0">Roll</h2>
          <p className="mb0">{this.props.roll}</p>

          <p className="fl w-50 mb0"><img className="w-25" src={imgs[this.props.dice]} /></p>
          <p className="fl w-50 mb0"><img className="w-25" src={imgs[this.props.dice2]} /></p>
          <h2 className="mv2">Running Total</h2>
          <p><span className="f3">{this.props.runningTotal}</span></p>
          <div className="bg-yellow w-50 tc center pa0 near-black mb0">
            <h2 className="f5 mt0">Score</h2>
            <p className="f2 mb0">{this.props.score}</p>
          </div>
          <Buttons {...this.props} />
        </div>
      </div>
    );
  }
}

export default Player;
