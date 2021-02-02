import React, { Component } from 'react';
import './assets/css/animate.min.css'
import './assets/css/linearicons.min.css'
import './assets/css/normalize.min.css'
import './assets/css/reset.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import './AppContainer.css'
import Skweyed from './skweyed/Skweyed';
import Messages from './messages/Messages';


class AppContainer extends Component {

  constructor() {
    super()
    this.state = {
      visitorName: "",
      isMessageScreenDisplayed: false
    }
    this.appStarterButton = this.appStarterButton.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  appStarterButton() {
    this.setState({
      visitorName: this.state.visitorName,
      isMessageScreenDisplayed: true
    })
  }

  onChangeHandler(e) {
    this.setState({
      visitorName: e.target.value
    })
  }

  render() {
    return (
      <div className="app-container animated fadeIn">
        <div className="overlay animated fadeIn"></div>
        <div className="skweyed animated fadeIn">
          <div className="container-fluid m-0 p-0 h-100 animated fadeIn">
            <div className="skweyed--bg animated fadeIn"></div>
            <div className="content animated fadeIn">
              <div className="row h-100">
                {/* Content starts here */}
                <Skweyed
                  onChangeHandler={this.onChangeHandler}
                  visitorName={this.state.visitorName}
                  appStarterButton={this.appStarterButton}
                />

                <Messages
                  onChangeHandler={this.onChangeHandler}
                  visitorName={this.state.visitorName}
                  appStarterButton={this.appStarterButton}
                  isMessageScreenDisplayed={this.state.isMessageScreenDisplayed}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppContainer;