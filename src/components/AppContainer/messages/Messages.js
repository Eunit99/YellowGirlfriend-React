import React, { useRef } from 'react';
import './components/assets/Message.css';
import ChatsContainer from './components/ChatsContainer';
import FirstMessageScreen from './components/FirstMessageScreen';
import '../../AppContainer/assets/css/animate.min.css'


const Messages = (props) => {
  const user = props.visitorName,
    isMessageScreenDisplayed = props.isMessageScreenDisplayed,
    messageRef = useRef();

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-5 p-0 my-auto">
      { isMessageScreenDisplayed &&
        <div
          messageref={messageRef}
          ref={messageRef}
          id="messageContainer"
          className="message-container animated fadeIn"
        >
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


export default Messages;