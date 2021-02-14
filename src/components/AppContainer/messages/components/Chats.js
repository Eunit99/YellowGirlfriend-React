import React, { Component } from 'react';
import ChatsLoader from './chatsloader/ChatsLoader';

class ChatsContainer extends Component {

  render() {
    let isChatsLoading = this.props.isChatsLoading;
    // console.log(`isChatsLoading? ${isChatsLoading}`);

    return (
      <div>
        <iframe
          src='http://127.0.0.1:5500/index.html'
          title="Chat"
          className={`message-container ${isChatsLoading? "displayNone" : ""}`}
        />

        {/*  <iframe
          src='https://yellow-girlfriendchat.netlify.app/index.html'
          title="Chat"
          className={`message-container ${isChatsLoading? "displayNone" : ""}`}
        /> */}

        {isChatsLoading?
        <ChatsLoader />
        : ""
        }
      </div>
    );
  }
}

export default ChatsContainer;