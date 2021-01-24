import React, { Component } from 'react';

class WelcomeInputContainer extends Component {
  
  render() {

    return (
      <input
        type="text"
        className="form-control"
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