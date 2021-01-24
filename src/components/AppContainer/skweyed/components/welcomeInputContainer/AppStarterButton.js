import React, { Component } from 'react';

class AppStarterButton extends Component {
  
  render() {

    //checking if input is not empty, then allow button interactivity
    let isDisabled,
    visitorName = this.props.visitorName; //Name of visitor typed in the input field in the Skweyed component

    // Check if input field is not empty
    if (visitorName !== "") {
      isDisabled = false
    } else {
      isDisabled = true
    }
    
    // For development use only
    // console.log(`Button is disabled: ${isDisabled}, \n Visitor's name is: ${visitorName}`)

    return (
        <div
          className="input-group-append">
          <button
            className="btn btn-secondary"
            id="sendBtn"
            type="button"
            onClick={this.onClick}
            disabled={isDisabled}
          >
            Start test
          </button>
        </div>
    );
  }
}


export default AppStarterButton;