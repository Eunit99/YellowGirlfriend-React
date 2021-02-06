import React, { Component } from 'react';

class WelcomeInputContainer extends Component {
  
  render() {
    let shakeVisitorInputNameField = this.props.shakeVisitorInputNameField;

    return (<input
          type="text"
          className={`form-control animated ${shakeVisitorInputNameField ? "shake" : ""}`}
          placeholder="Enter first name..."
          aria-label="Enter first name..."
          aria-describedby="submit-button"
          id="nameInput"
          value={this.props.visitorName}
          onChange={this.props.onChangeHandler}
        />
    );
  }
}

export default WelcomeInputContainer;