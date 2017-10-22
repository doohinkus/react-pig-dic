import React, { Component } from 'react';
import Game from "./components/game";
import logo from "./img/pig-chip.svg";


class App extends Component {
  render() {
    return (
      <div className="App cf">
        <div className="w-100 bg-dark-pink">
        <h1 className="ma0 pa2 tc white rubik">Pig Dice React</h1>
        </div>

        <Game />
      </div>
    );
  }
}

export default App;
