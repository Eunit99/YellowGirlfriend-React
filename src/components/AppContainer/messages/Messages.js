import React, { useRef } from 'react';
import './components/assets/Message.css';
import Chats from './components/Chats';
import FirstMessageScreen from './components/FirstMessageScreen';
import '../../AppContainer/assets/css/animate.min.css'
import ChatsLoader from './components/chatsloader/ChatsLoader';


const Messages = (props) => {
  let user = props.visitorName,
      isMessageScreenDisplayed = props.isMessageScreenDisplayed,
      messageRef = useRef(),
      displayMessageScreen,
      visitorAcceptedCookiesConsent = props.visitorAcceptCookies,
      didReadBriefDescription = props.didReadBriefDescription,
      readBriefDescription = props.readBriefDescription,
      isChatsLoading = props.isChatsLoading;

  if (isMessageScreenDisplayed === true && visitorAcceptedCookiesConsent === true) {
      displayMessageScreen = true
  } else {
      displayMessageScreen = false
  }

  // For development use only
  // console.log(`Is message screen displayed? ${displayMessageScreen}`);
  // console.log(`Is cookie consent accepted? ${visitorAcceptedCookiesConsent}`);
  // console.log(`readBriefDescription? ${readBriefDescription}`);
  // console.log(`isChatsLoading? ${isChatsLoading}`);


  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-5 p-0 my-auto">
      { displayMessageScreen &&
        <div
          ref={messageRef}
          id="messageContainer"
          className="message-container animated fadeInRight"
        >
          {/* Content starts here */}

        {readBriefDescription?
            isChatsLoading?
            <ChatsLoader />
            :
            <Chats
              readBriefDescription={readBriefDescription}
              didReadBriefDescription={didReadBriefDescription}
              isChatsLoading={isChatsLoading}
            />
          :
          <FirstMessageScreen
            isTermsOfServiceDescriptionDisplayed={props.isTermsOfServiceDescriptionDisplayed}
            user={user}
            readBriefDescription={readBriefDescription}
            didReadBriefDescription={didReadBriefDescription}
            isChatsLoading={isChatsLoading}
            cookiesAccept={props.cookiesAccept}
            visitorAcceptCookies={props.visitorAcceptCookies}
        />
          }
        </div>
      }
    </div>
  );
}


export default Messages;