import React, { Component } from 'react';
import Game from "./components/game";
import logo from "./img/pig-chip.svg";


class App extends Component {
  render() {
    return (
      <div className="App cf">
        <div className="w-100 bg-lightest-blue">
        <h1 className="ma0 pa2 white tc blue">Pig Dice React</h1>
        </div>
        <div className="w-100 pa2 center cf tc">
          <img src={logo} className="h4"/>
        </div>
        <Game />
      </div>
    );
  }
}

export default App;
