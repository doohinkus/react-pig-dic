import React, { Component } from "react";

class DisplayScore extends Component{
  render () {
    return (
      <div>
        {this.props.score}
      </div>
    )
  }
}

export default DisplayScore;
