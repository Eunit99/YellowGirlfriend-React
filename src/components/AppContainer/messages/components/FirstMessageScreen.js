import React, { Component } from 'react';
// import FirstMessageInputContainer from './firstMessageScreen/FirstMessageInputContainer'

class FirstMessageScreen extends Component {

  render() {
    const user = this.props.user;
    let greetingText;
    if (user !== "") {
      greetingText = `Hello ${user}!`
    } else {
      greetingText = `Hello!`
    }

    let isTermsOfServiceDescriptionDisplayed = this.props.isTermsOfServiceDescriptionDisplayed;
    console.log(`isTermsOfServiceDescriptionDisplayed? ${isTermsOfServiceDescriptionDisplayed}`)

    return (
      <div className="message-container-intro">
        <div className="long-into">
          {greetingText} 
        </div>
        <div className="small-into">Welcome to yellow girlfriend.</div>

        {isTermsOfServiceDescriptionDisplayed ? 
          <div className="small-into terms-of-service-container">Terms of Service</div> : ""
        }

        {/* <FirstMessageInputContainer /> */}
      </div>
    );
  }
}

export default FirstMessageScreen;