import React, { Component } from 'react';
import './components/assets/Skweyed.css'
import HeroTextContainer from './components/HeroTextContainer';
import SocialIconsContainer from './components/SocialIconsContainer';
import '../../AppContainer/assets/css/animate.min.css'

class Skweyed extends Component {

  render() {
    return (
      <div className="col-12 col-sm-12 col-md-12 col-lg-7 my-auto m-0 p-0 animated fadeIn">
        {/* Content starts here */}
        <HeroTextContainer
          handleScrollClick={this.props.handleScrollClick}
          onChangeHandler={this.props.onChangeHandler}
          visitorName={this.props.visitorName}
          appStarterButton={this.props.appStarterButton}
          cookiesAccept={this.props.cookiesAccept}
          isCookiesConsentDisplayed={this.props.isCookiesConsentDisplayed}
          isSuggestAcceptCookiesDisplayed={this.props.isSuggestAcceptCookiesDisplayed}
          isSuggestInputNameDisplayed={this.props.isSuggestInputNameDisplayed}
          closeInfoCookies={this.props.closeInfoCookies}
          closeInfoInputName={this.props.closeInfoInputName}
          shakeCookieSuggestion={this.props.shakeCookieSuggestion}
          shakeVisitorInputNameField={this.props.shakeVisitorInputNameField}
          shakeAcceptLearnBtn={this.props.shakeAcceptLearnBtn}
          learnMoreAboutCookies={this.props.learnMoreAboutCookies}
          isTermsOfServiceDescriptionDisplayed={this.props.isTermsOfServiceDescriptionDisplayed}
          isAppStarterInputDisplayed={this.props.isAppStarterInputDisplayed}
        />
        <SocialIconsContainer />
      </div>
    );
  }
}


export default Skweyed;