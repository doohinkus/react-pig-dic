import React, { Component } from "react";

// show blank buttons for computer

class Buttons extends Component{
  render () {
    let message;
    if(this.props.name == "Computer" && this.props.playing){
      message = "Computer is rolling the dice";
    }else if (this.props.name == "Computer"){
      message = "Computer is waiting for turn";
    }
    return (
      <div>
        <div className={this.props.playing && this.props.name != "Computer" ? 'pa4' : 'hide'}>
          <a onClick={this.props.onClickRoll} className="f5 link dim pv3 ph4 mr3 mb2 dib white bg-green pointer">Roll</a>
          <a onClick={this.props.onClickHold} className="f5 link dim pv3 ph4 mb2 dib white bg-dark-pink pointer">Hold</a>
        </div>
        <div className='pa4'>
          {message}
        </div>
      </div>
    )
  }
}

export default Buttons;
