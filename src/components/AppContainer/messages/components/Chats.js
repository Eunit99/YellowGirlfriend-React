import React, { Component } from 'react';

class ChatsContainer extends Component {

  render() {
    return (
      <ul id="chat" className="individual-messages active">
          <li className="bot">We all know that your girlfriend cheats on you! 😊</li>
          <li className="user">We all know that your girlfriend cheats on you! 😊</li>
      </ul>
    );
  }
}

export default ChatsContainer;