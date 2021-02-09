import React, { useRef } from 'react';
import './components/assets/Message.css';
import Chats from './components/Chats';
import FirstMessageScreen from './components/FirstMessageScreen';
import '../../AppContainer/assets/css/animate.min.css'
// import ChatInput from './components/chatsinput/ChatInput';


const Messages = (props) => {
  let user = props.visitorName,
      isMessageScreenDisplayed = props.isMessageScreenDisplayed,
      messageRef = useRef(),
      displayMessageScreen,
      visitorAcceptedCookiesConsent = props.visitorAcceptCookies

  if (isMessageScreenDisplayed === true && visitorAcceptedCookiesConsent === true) {
     displayMessageScreen = true
  } else {
     displayMessageScreen = false
  }

  // For development use only
  // console.log(`Is message screen displayed? ${displayMessageScreen}`);
  // console.log(`Is cookie consent accepted? ${visitorAcceptedCookiesConsent}`);

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-5 p-0 my-auto">
      { displayMessageScreen &&
        <div
          ref={messageRef}
          id="messageContainer"
          className="message-container"
        >
          {/* Content starts here */}
          <FirstMessageScreen
            isTermsOfServiceDescriptionDisplayed={props.isTermsOfServiceDescriptionDisplayed}
            user={user}
          />
          <Chats />
          {/* <ChatInput /> */}
        </div>
      }
    </div>
  );
}


export default Messages;