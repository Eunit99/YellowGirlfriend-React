import React, { Component } from 'react';
import AppStarterButton from './welcomeInputContainer/AppStarterButton';
import AppStarterInput from './welcomeInputContainer/AppStarterInput';

class WelcomeInputContainer extends Component {
  constructor() {
    super()
    this.state = {
      visitorName: ""
    }
    this.appStarterButton = this.appStarterButton.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  appStarterButton() {
    console.log(`I as the appStarterButton is working`)
  }

  onChangeHandler(e) {

    this.setState({
      visitorName: e.target.value
    })
  }

  render() {
    return(
      <div className="input-group input-group--intro">

        <AppStarterInput
          onChangeHandler={this.onChangeHandler}
          visitorName={this.state.visitorName}
        />

        <AppStarterButton
          onClick={this.appStarterButton}
          visitorName={this.state.visitorName}
        />

      </div>
    );
  }
}


export default WelcomeInputContainer;