import React, { Component } from 'react';
import WelcomeInputContainer from './WelcomeInputContainer';
import ReactTooltip from 'react-tooltip'
import CookiesConsent from './cookies-consent/CookiesConsent';
import UsefulInfo from '../../usefulinfo/UsefulInfo';


class HeroTextContainer extends Component {
  render() {
    
    let headingText = "We believe you know your girlfriend cheats on you",
    hour = new Date().getHours();

    if (hour < 12) {
      headingText = "We believe you know your girlfriend cheats on you"
    } else if (hour >= 12 && hour < 17) {
      headingText = "We believe your girlfriend cheats on you"
    } else if (hour >= 17 && hour <= 21) {
      headingText = "We believe your girlfriend will cheat on you"
    } else {
      headingText = "We believe girlfriends cheat"
    }

    return (
      <div className="skweyed-content text-white">
        <div className="hero-heading mb-2 mb-sm-5">
          <h1>
            {headingText}
            <span data-tip="This is just our opinion and shouldn't be considered a professional advice.">*</span>
          </h1>
        </div>
        <div className="mb-2 mb-sm-3">
          <p>We're convinced your girlfriend cheats on you, if not, you wouldn't find yourself here!
          </p>
        </div>
        <div className="mb-2 mb-sm-5">
          <p>Anyways, take a few minutes to complete our assessment to better understand if your girlfriend is a
            "<span
              className="title-text"
              data-tip="Yellow girlfriend is our own term given to<br>
              cheating girlfriends and has nothing to do with any race. <br>
              Please read our Terms of Service to learn more."
            >
              yellow girlfriend
            </span>"
          </p>
          <ReactTooltip
            place="top"
            delayHide={1000}
            border={true}
            textColor="#000000"
            backgroundColor="#f8dea2"
            borderColor="#f8dea2"
            clickable={true}
            multiline={true}
          />
        </div>

				<WelcomeInputContainer
          handleScrollClick={this.props.handleScrollClick}
          onChangeHandler={this.props.onChangeHandler}
          visitorName={this.props.visitorName}
          appStarterButton={this.props.appStarterButton}
        />

        <CookiesConsent
          cookiesAccept={this.props.cookiesAccept}
          isCookiesConsentDisplayed={this.props.isCookiesConsentDisplayed}
        />

        <UsefulInfo
          isMessageScreenDisplayed={this.props.isMessageScreenDisplayed}
          cookiesAccept={this.props.cookiesAccept}
          isCookiesConsentDisplayed={this.props.isCookiesConsentDisplayed}
          visitorAcceptCookies={this.props.visitorAcceptCookies}
          isSuggestAcceptCookiesDisplayed={this.props.isSuggestAcceptCookiesDisplayed}
          isSuggestInputNameDisplayed={this.props.isSuggestInputNameDisplayed}
          closeInfoCookies={this.props.closeInfoCookies}
          closeInfoInputName={this.props.closeInfoInputName}
        />
      </div>
    );
  }
}

export default HeroTextContainer;