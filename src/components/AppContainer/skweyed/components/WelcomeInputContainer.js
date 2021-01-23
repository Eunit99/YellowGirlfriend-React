import React, { Component } from 'react';

class WelcomeInputContainer extends Component {

  render() {
    return (
      <div className="input-group input-group--intro mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Enter first name ..."
          aria-label="Enter first name ..."
          aria-describedby="submit-button"
          id="nameInput"
        />
        <div className="input-group-append">
          <button className="btn btn-secondary" id="sendBtn" type="button">Start test</button>
        </div>
      </div>
    );
  }
}


export default WelcomeInputContainer;