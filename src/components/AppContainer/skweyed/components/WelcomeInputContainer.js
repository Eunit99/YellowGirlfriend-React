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
    let typedName = e.target.value;

    this.setState({
      visitorName: typedName
    })
  }

  render() {
    return(
      <div className="input-group input-group--intro mt-5">
        <AppStarterInput
          onChangeHandler={this.onChangeHandler}
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