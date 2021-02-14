import React, { Component } from 'react';
import Greetings from './firstMessageScreen/greetings/Greetings';
import TermsOfService from './firstMessageScreen/termsofservice/TermsOfService';
import './firstMessageScreen/assets/firstScreenMessage.css'
// import FirstMessageInputContainer from './firstMessageScreen/FirstMessageInputContainer'

class FirstMessageScreen extends Component {

  render() {
    let isTermsOfServiceDescriptionDisplayed = this.props.isTermsOfServiceDescriptionDisplayed,
        didReadBriefDescription = this.props.didReadBriefDescription;
    // console.log(`isTermsOfServiceDescriptionDisplayed? ${isTermsOfServiceDescriptionDisplayed}`)

    return (
      <div className="message-container-intro">
        {isTermsOfServiceDescriptionDisplayed ?
          <TermsOfService
            user={this.props.user}
            didReadBriefDescription={didReadBriefDescription}
          /> :
          <Greetings
            user={this.props.user}
            didReadBriefDescription={didReadBriefDescription}
          />
        }

        {/* <FirstMessageInputContainer /> */}
      </div>
    );
  }
}

export default FirstMessageScreen;