import React, { Component } from "react";

class Buttons extends Component{
  render () {
    return (
      <div className={this.props.playing===true && this.props.showButtons ? 'pv3' : 'hide'}>
        <a onClick={this.props.onClickRoll} className="f5 link dim pv3 ph4 mr3 mb2 dib white bg-hot-pink pointer">Roll</a>
        <a onClick={this.props.onClickHold} className="f5 link dim pv3 ph4 mb2 dib white bg-dark-gray pointer">Hold</a>
      </div>
    )
  }
}

export default Buttons;
