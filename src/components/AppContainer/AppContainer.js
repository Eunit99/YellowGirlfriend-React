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
      isAppStarterInputDisplayed: false, // Hide app starter input by default
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
      isAppStarterInputDisplayed: false, // Hide input when app starter button is clicked
    })

    if (!this.state.isSuggestInputNameDisplayed) {
      this.setState({
        shakeCookieSuggestion: true, // Shake acceptance of cookie
      })
    }

    // console.log(`visitorName: ${this.state.visitorName}`)

    if (!this.state.visitorAcceptCookies) {
      this.setState({
        shakeAcceptLearnBtn: true, // Shake accept and learn buttons if cookie consent is not accepted and appStarterBtn clicked
      })
    }

    // If visitor has accepted cookies terms and has input their name, then hide terms of service
    if (this.state.visitorAcceptCookies) {
      this.setState({
        isTermsOfServiceDescriptionDisplayed: false, // Hide terms of service description container
      })
    }

  }

  onChangeHandler(e) {
    this.setState({
      visitorName: e.target.value,
      isSuggestInputNameDisplayed: false, //Sets suggestion of input name to false
    })
  }

	// Handle submit enter key on the messages container
	handleEnterKey = (e) => {
		if (e.key === "Enter") {
			this.appStarterButton();
		}
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
          isSuggestInputNameDisplayed: true // Display suggestion to input name if name is blank
        })
      }

      if (visitorName === "" && this.state.isTermsOfServiceDescriptionDisplayed === true) {
        this.setState({
          isSuggestInputNameDisplayed: false
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
      isSuggestAcceptCookiesDisplayed: false, // Hide acceptance of cookie when button is clicked
      isAppStarterInputDisplayed: true, // Displays app starter input when cookies is accepted
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
                  isMessageScreenDisplayed={this.state.isMessageScreenDisplayed}
                  didReadBriefDescription={this.props.didReadBriefDescription}
                  readBriefDescription={this.props.readBriefDescription}
									handleEnterKey={this.handleEnterKey}
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
                  isAppStarterInputDisplayed={this.state.isAppStarterInputDisplayed}
                  readBriefDescription={this.props.readBriefDescription}
                  didReadBriefDescription={this.props.didReadBriefDescription}
                  isChatsLoading={this.props.isChatsLoading}
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