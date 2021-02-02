import React, { Component } from 'react';
import AppStarterButton from './welcomeInputContainer/AppStarterButton';
import AppStarterInput from './welcomeInputContainer/AppStarterInput';

class WelcomeInputContainer extends Component {
  

  render() {
    return(
      <div className="input-group input-group--intro">

        <AppStarterInput
          onChangeHandler={this.props.onChangeHandler}
          visitorName={this.props.visitorName}
        />

        <AppStarterButton
          appStarterButton={this.props.appStarterButton}
          visitorName={this.props.visitorName}
        />

      </div>
    );
  }
}


export default WelcomeInputContainer;