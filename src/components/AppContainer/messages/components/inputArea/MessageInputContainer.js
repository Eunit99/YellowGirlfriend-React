import React, { Component } from 'react';
import MessageSendButton from './MessageSendButton';

class MessageInputContainer extends Component {

  render() {
    return (
    <div className="message-input-container">
      {/*  Message textarea */}
      <textarea name="" id="messageBox" placeholder="Type your response ..."></textarea>
      {/*  /Message textarea */}

      {/* Content starts here */}
      <MessageSendButton />
    </div>
    );
  }
}

export default MessageInputContainer;