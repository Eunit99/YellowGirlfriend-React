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
      isMessageScreenDisplayed: false, //Hide Message component by default
      visitorAcceptCookies: false, //visitor has not accepted cookies consent
      isCookiesConsentDisplayed: false // cookies message is not displayed by default
    }
    this.appStarterButton = this.appStarterButton.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.cookiesAccept = this.cookiesAccept.bind(this);
    this.learnMoreAboutCookies = this.learnMoreAboutCookies.bind(this);
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

  handleScrollClick(ref) {
  // console.log(`Click happened! ${ref}`); // Ref is still undefined! Having a hard time passing it from the child component, I hope to fix this soon.
  // ref.current.scrollIntoView({ behaviour: 'smooth' }) //Ref is still undefined!
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isCookiesConsentDisplayed: true //cookies message is displayed to user after 2s
      })
    }, 2000);
  }

  componentWillUnmount() {
    this.setState({
      isCookiesConsentDisplayed: false
    })
  }

  cookiesAccept = () => {
    this.setState({
      isCookiesConsentDisplayed: false, //cookies message is not displayed by as user accepts cookie consent
      visitorAcceptCookies: true //visitor has accepted cookies consent
    })
  }

  learnMoreAboutCookies = () => {
    this.setState({

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
                  handleScrollClick={this.handleScrollClick}
                  onChangeHandler={this.onChangeHandler}
                  visitorName={this.state.visitorName}
                  appStarterButton={this.appStarterButton}
                  cookiesAccept={this.cookiesAccept}
                  isCookiesConsentDisplayed={this.state.isCookiesConsentDisplayed}
                  visitorAcceptCookies={this.state.visitorAcceptCookies}
                />

                <Messages
                  handleScrollClick={this.handleScrollClick}
                  onChangeHandler={this.onChangeHandler}
                  visitorName={this.state.visitorName}
                  appStarterButton={this.appStarterButton}
                  isMessageScreenDisplayed={this.state.isMessageScreenDisplayed}
                  cookiesAccept={this.cookiesAccept}
                  isCookiesConsentDisplayed={this.state.isCookiesConsentDisplayed}
                  visitorAcceptCookies={this.state.visitorAcceptCookies}
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