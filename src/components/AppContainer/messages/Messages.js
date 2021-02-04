import React, { Component } from 'react';
import './components/assets/Message.css';
import ChatsContainer from './components/ChatsContainer';
import FirstMessageScreen from './components/FirstMessageScreen';
import '../../AppContainer/assets/css/animate.min.css'


class Messages extends Component {

  render() {
    const user = this.props.visitorName,
      isMessageScreenDisplayed = this.props.isMessageScreenDisplayed;

    return (
      <div className="col-12 col-sm-12 col-md-12 col-lg-5 p-0 my-auto">
        { isMessageScreenDisplayed &&
          <div id="messageContainer" className="message-container animated fadeIn">
            {/* Content starts here */}
                <FirstMessageScreen
                  user={user}
                />
                <ChatsContainer />
          </div>
        }
      </div>
    );
  }
}

export default Messages;