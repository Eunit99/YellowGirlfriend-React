import React, { Component } from 'react';

class ChatsContainer extends Component {

  render() {
    return (
      <div>

        <iframe
          src='http://127.0.0.1:5500/index.html'
          title="Chat"
          className="message-container"
        />

        {/* <iframe
        src='https://yellow-girlfriendchat.netlify.app/index.html'
        title="Chat"
        className="message-container"
        /> */}

      </div>
    );
  }
}

export default ChatsContainer;