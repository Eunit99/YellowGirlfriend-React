import React, { Component } from 'react';

class ChatsContainer extends Component {

  render() {
    return (
    <iframe
      src='http://127.0.0.1:5500/index.html'
      title="Chat"
      className="message-container"
    />
    );
  }
}

export default ChatsContainer;