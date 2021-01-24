import React, { Component } from 'react';

class AppStarterButton extends Component {
  
  render() {

    //checking if input is not empty, then allow button interactivity
    let buttonState,
    visitorName = this.props.visitorName;

    if (visitorName === !"") {
      buttonState = "enabled"
    } else {
      buttonState = "disabled"
    }
    console.log(`${buttonState}, ${this.props.visitorName}`)

    return (
        <div
          className="input-group-append">
          <button
            className="btn btn-secondary"
            id="sendBtn"
            type="button"
            onClick={this.onClick}
            disabled={buttonState ? "disabled" : null}
          >
            Start test
            {buttonState? "disabled" : "enabled"}
          </button>
        </div>
    );
  }
}


export default AppStarterButton;