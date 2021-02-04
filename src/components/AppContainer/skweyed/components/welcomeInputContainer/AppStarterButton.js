import React from 'react';

const AppStarterButton = (props) => {
  
  //checking if input is not empty, then allow button interactivity
  let isButtonDisabled,
    visitorName = props.visitorName; //Name of visitor typed in the input field in the Skweyed component

  // Check if input field is not empty
  if (visitorName !== "") {
    isButtonDisabled = false
  } else {
    isButtonDisabled = true
  }

  // For development use only
  // console.log(`Button is disabled: ${isButtonDisabled}, \n Visitor's name is: ${visitorName}`)

    return (
      <div
        className="input-group-append">
        <button
          className="btn btn-secondary"
          id="sendBtn"
          type="button"
          onClick={() => {props.appStarterButton(); props.handleScrollClick() }}
          disabled={isButtonDisabled}
        > Start test
            </button>
      </div>
    );
  }


export default AppStarterButton;