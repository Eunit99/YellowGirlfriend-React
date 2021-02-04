import React, { Component } from 'react';

class FirstMessageInputContainer extends Component {

  render() {
    return (
      <div className="message-input">
        <span className="input-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="none"
              d="M0 0h24v24H0z"
            />
            <path
              d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
          </svg>
        </span>
        <input
          type="text"
          id="messageInput"
          placeholder="Type your name..."
        />
      </div>
    );
  }
}

export default FirstMessageInputContainer;