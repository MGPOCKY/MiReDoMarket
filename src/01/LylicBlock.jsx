import React, { Component } from "react";

class LylicBlock extends Component {
  render() {
    return (
      <button
        className={"square " + this.props.className}
        id={this.props.id}
        onClick={this.props.func}
      >
        {this.props.value}
      </button>
    );
  }
}

export default LylicBlock;
