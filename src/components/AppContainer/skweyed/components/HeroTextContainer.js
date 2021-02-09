import React, { Component } from 'react';
import WelcomeInputContainer from './WelcomeInputContainer';
import ReactTooltip from 'react-tooltip'
import CookiesConsent from './cookies-consent/CookiesConsent';
import UsefulInfo from '../../usefulinfo/UsefulInfo';
import Scroll from './scrolldown/Scroll';


class HeroTextContainer extends Component {
  render() {
    
    let headingText = "We believe you know your girlfriend cheats on you",
        isMessageScreenDisplayed = this.props.isMessageScreenDisplayed,
        isAppStarterInputDisplayed = this.props.isAppStarterInputDisplayed,
        hour = new Date().getHours();
    // console.log(`isMessageScreenDisplayed? ${isMessageScreenDisplayed}`);
    
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
        <div className="hero-heading mb-4 mb-sm-5">
          <h1>
            {headingText}
            <span
              data-tip="This is just our opinion and shouldn't be<br>
                        considered a professional advice.">*</span>
          </h1>
        </div>
        <div className="mb-3 mb-sm-3">
          <p>We're convinced your girlfriend cheats on you, if not, you wouldn't find yourself here!
          </p>
        </div>
        <div className="mb-3 mb-sm-5">
          <p>Anyways, take a few minutes to complete our assessment to better understand if your girlfriend is a
            "<span
              className="title-text"
              data-tip="Yellow girlfriend is our own term given to<br>
              cheating girlfriends and has nothing to do with any race or skin colour. <br>
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

        {isAppStarterInputDisplayed?
        <WelcomeInputContainer
          handleScrollClick={this.props.handleScrollClick}
          onChangeHandler={this.props.onChangeHandler}
          visitorName={this.props.visitorName}
          appStarterButton={this.props.appStarterButton}
          shakeVisitorInputNameField={this.props.shakeVisitorInputNameField}
          isAppStarterInputDisplayed={this.props.isAppStarterInputDisplayed}
          isMessageScreenDisplayed={this.props.isMessageScreenDisplayed}
        /> : ""
        }

        {isMessageScreenDisplayed ?
          <Scroll
            isMessageScreenDisplayed={this.props.isMessageScreenDisplayed}
          /> : ""
        }

        <CookiesConsent
          cookiesAccept={this.props.cookiesAccept}
          isCookiesConsentDisplayed={this.props.isCookiesConsentDisplayed}
          shakeAcceptLearnBtn={this.props.shakeAcceptLearnBtn}
          learnMoreAboutCookies={this.props.learnMoreAboutCookies}
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
          shakeCookieSuggestion={this.props.shakeCookieSuggestion}
        />
      </div>
    );
  }
}

export default HeroTextContainer;