import React, { Component } from 'react';
import Greetings from './firstMessageScreen/greetings/Greetings';
import TermsOfService from './firstMessageScreen/termsofservice/TermsOfService';
// import FirstMessageInputContainer from './firstMessageScreen/FirstMessageInputContainer'

class FirstMessageScreen extends Component {

  render() {
    
    let isTermsOfServiceDescriptionDisplayed = this.props.isTermsOfServiceDescriptionDisplayed;
    // console.log(`isTermsOfServiceDescriptionDisplayed? ${isTermsOfServiceDescriptionDisplayed}`)

    return (
      <div className="message-container-intro">
        {isTermsOfServiceDescriptionDisplayed ? 
          <TermsOfService
            user={this.props.user}
          /> : 
          <Greetings
            user={this.props.user}
          />
        }

        {/* <FirstMessageInputContainer /> */}
      </div>
    );
  }
}

export default FirstMessageScreen;