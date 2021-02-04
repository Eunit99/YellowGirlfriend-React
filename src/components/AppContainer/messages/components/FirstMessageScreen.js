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

    return (
      <div className="message-container-intro">
        <div className="long-into">
          {greetingText} 
        </div>
        <div className="small-into">Welcome to yellow girlfriend.</div>
        {/* <FirstMessageInputContainer /> */}
      </div>
    );
  }
}

export default FirstMessageScreen;