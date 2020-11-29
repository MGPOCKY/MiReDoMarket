import React, { Component } from "react";

class YoutubeVideo extends Component {
  render() {
    return (
      <div>
        <object
          type="text/html"
          width="100%"
          height="500"
          alt={this.props.data}
          data={this.props.link}
        />
      </div>
    );
  }
}

export default YoutubeVideo;
