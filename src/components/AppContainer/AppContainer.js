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
      isMessageScreenDisplayed: true, //Hide Message component by default
      isAppStarterInputDisplayed: true, // Display app starter input by default
      visitorAcceptCookies: false, //visitor has not accepted cookies consent
      isCookiesConsentDisplayed: false, // cookies message is not displayed by default
      isSuggestAcceptCookiesDisplayed: false, // Hide acceptance of cookie by default
      isSuggestInputNameDisplayed: false, // Hide suggestion to enter name by default
      shakeCookieSuggestion: false, // Do not shake acceptance of cookie by default
      shakeVisitorInputNameField: false, // Do not shake visitor input field by default
      shakeAcceptLearnBtn: false, // Do not shake accept or learn buttons by default
      isTermsOfServiceDescriptionDisplayed: false, // Do not displays terms of service description to visitor by default
    }
    this.appStarterButton = this.appStarterButton.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.cookiesAccept = this.cookiesAccept.bind(this);
    this.learnMoreAboutCookies = this.learnMoreAboutCookies.bind(this);
  }

  appStarterButton() {
    this.setState({
      visitorName: this.state.visitorName,
      isMessageScreenDisplayed: true, // Display message component when appStarterButton is clicked
      isSuggestInputNameDisplayed: false, //Sets suggestion of input name to false
    })

    if (!this.state.isSuggestInputNameDisplayed) {
      this.setState({
        shakeCookieSuggestion: true, // Shake acceptance of cookie by default
      })
    }

    console.log(`visitorName: ${this.state.visitorName}`)
  }

  onChangeHandler(e) {
    this.setState({
      visitorName: e.target.value,
      isSuggestInputNameDisplayed: false, //Sets suggestion of input name to false
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

    setTimeout(() => {
      var visitorAcceptCookies = this.state.visitorAcceptCookies,
          visitorName = this.state.visitorName;

      if (visitorAcceptCookies === false) {
        this.setState({
          isSuggestAcceptCookiesDisplayed: true
        })
      };

      if (visitorName === "") {
        this.setState({
          isSuggestInputNameDisplayed: true
        }) 
      }
    },
      6000) // Display info messages if user does nothing in 6s
  }

  componentWillUnmount() {
    this.setState({
      isCookiesConsentDisplayed: false,
      isSuggestInputNameDisplayed: false
    })
  }

  cookiesAccept = () => {
    this.setState({
      isCookiesConsentDisplayed: false, //cookies message is not displayed as user accepts cookie consent
      visitorAcceptCookies: true, //visitor has accepted cookies consent
      isSuggestAcceptCookiesDisplayed: false // Hide acceptance of cookie when button is clicked
    })

    // console.log(`visitorName: ${this.state.visitorName}`)
    // console.log(`isSuggestInputNameDisplayed? ${this.state.isSuggestInputNameDisplayed}`)
    
    if (this.state.visitorName === "") {
      this.setState({
        isMessageScreenDisplayed: false, // Do not display message component when accept button is clicked if name input is empty
        isSuggestInputNameDisplayed: true, // Display suggestion to input name when accept button is clicked without providing a name
      })

      setTimeout(() => {
        this.setState({
          shakeVisitorInputNameField: true, // Shake visitor input field when input empty
        })
      }, 2000);
    }
  }

  learnMoreAboutCookies = () => {
    this.setState({
      isMessageScreenDisplayed: true, // Display message component when Learn more button is clicked
      isCookiesConsentDisplayed: false, //cookies message is not displayed as user accepts cookie consent
      isTermsOfServiceDescriptionDisplayed: true, // Displays terms of service description to visitor
      isSuggestAcceptCookiesDisplayed: false, // Hide acceptance of cookie when button is clicked
      visitorAcceptCookies: true, //visitor has accepted cookies consent
      isAppStarterInputDisplayed: false, // Hide app starter input when learn more button is clicked
      isSuggestInputNameDisplayed: false, // Hide suggestion to enter name
    })

    // console.log(`Learn more button was clicked!`)
    // console.log(`Is Message Screen Displayed? ${this.state.isMessageScreenDisplayed}`)
  }

  closeInfoInputName =() => {
    this.setState({
      isSuggestInputNameDisplayed: false, // Hide acceptance of suggestion to enter name when close is clicked
    })

    // If input field for name is still empty and visitor clicks close info btn
    if (this.state.isSuggestInputNameDisplayed) {
      this.setState({
        shakeVisitorInputNameField: true, // Shake visitor input field
      })

      // console.log(`Applied shake to visitor name input field`)
    }
  }
  
  closeInfoCookies = () => {
    this.setState({
      isSuggestAcceptCookiesDisplayed: false, // Hide acceptance of cookie when close is clicked
    })

    // If visitor clicks on close btn without accepting the terms
    if (this.state.isSuggestAcceptCookiesDisplayed) {
      this.setState({
        shakeAcceptLearnBtn: true, // Shake visitor input field
      })

      // console.log(`Applied shake to "learn more" and "accept" button`)
    }
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
                  closeInfoCookies={this.closeInfoCookies}
                  closeInfoInputName={this.closeInfoInputName}
                  visitorName={this.state.visitorName}
                  appStarterButton={this.appStarterButton}
                  cookiesAccept={this.cookiesAccept}
                  isCookiesConsentDisplayed={this.state.isCookiesConsentDisplayed}
                  visitorAcceptCookies={this.state.visitorAcceptCookies}
                  isSuggestAcceptCookiesDisplayed={this.state.isSuggestAcceptCookiesDisplayed}
                  isSuggestInputNameDisplayed={this.state.isSuggestInputNameDisplayed}
                  shakeCookieSuggestion={this.state.shakeCookieSuggestion}
                  shakeVisitorInputNameField={this.state.shakeVisitorInputNameField}
                  shakeAcceptLearnBtn={this.state.shakeAcceptLearnBtn}
                  learnMoreAboutCookies={this.learnMoreAboutCookies}
                  isTermsOfServiceDescriptionDisplayed={this.state.isTermsOfServiceDescriptionDisplayed}
                  isAppStarterInputDisplayed={this.state.isAppStarterInputDisplayed}
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
                  isTermsOfServiceDescriptionDisplayed={this.state.isTermsOfServiceDescriptionDisplayed}
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