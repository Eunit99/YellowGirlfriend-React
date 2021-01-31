import React, { Component } from 'react';
import './components/assets/Message.css';
import ChatsContainer from './components/ChatsContainer';
import FirstMessageScreen from './components/firstMessageScreen/FirstMessageScreen';
import '../../AppContainer/assets/css/animate.min.css'


class Messages extends Component {

  render() {
    return (
      <div className="col-12 col-sm-12 col-md-12 col-lg-5 p-0 my-auto">
        <div className="message-container animated fadeIn">
          {/* Content starts here */}
          <FirstMessageScreen />
          <ChatsContainer />
        </div>
      </div>
    );
  }
}

export default Messages;