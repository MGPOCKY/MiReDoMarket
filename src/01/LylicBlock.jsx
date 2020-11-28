import React, { Component } from 'react';

class LylicBlock extends Component {
  render() {
    return (
      <div
        className={'square ' + this.props.className}
        id={this.props.id}
        onClick={this.props.func}
      >
        {this.props.value}
      </div>
    );
  }
}

export default LylicBlock;
