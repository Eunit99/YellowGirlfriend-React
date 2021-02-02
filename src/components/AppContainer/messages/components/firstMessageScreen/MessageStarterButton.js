import React, { Component } from 'react';

class MessageStarterButton extends Component {
  constructor() {
    super()
    this.state = {
     
    }
    this.sendMessageButton = this.sendMessageButton.bind(this)
  }

  sendMessageButton() {
  }

  render() {
    return (
      <button
        className="send-btn soundBtn"
        id="sendBtn"
        onClick={this.sendMessageButton}
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z" />
        </svg>
      </button>
    );
  }
}

export default MessageStarterButton;