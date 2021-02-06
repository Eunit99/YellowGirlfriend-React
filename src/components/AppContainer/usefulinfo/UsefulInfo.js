import React, { Component } from 'react';
import '../usefulinfo/assets/UsefulInfo.css'
import SuggestInputName from './components/suggestinputname/SuggestInputName';
import SuggestAcceptCookies from './components/suggestacceptcookies/suggestAcceptCookies';

class UsefulInfo extends Component {

  render() {
    return (
      <div>
        <SuggestInputName
          isSuggestInputNameDisplayed={this.props.isSuggestInputNameDisplayed}
          isMessageScreenDisplayed={this.props.isMessageScreenDisplayed}
          cookiesAccept={this.props.cookiesAccept}
          isCookiesConsentDisplayed={this.props.isCookiesConsentDisplayed}
          visitorAcceptCookies={this.props.visitorAcceptCookies}
          closeInfoInputName={this.props.closeInfoInputName}
        />

        <SuggestAcceptCookies
          isSuggestAcceptCookiesDisplayed={this.props.isSuggestAcceptCookiesDisplayed}
          isMessageScreenDisplayed={this.props.isMessageScreenDisplayed}
          cookiesAccept={this.props.cookiesAccept}
          isCookiesConsentDisplayed={this.props.isCookiesConsentDisplayed}
          visitorAcceptCookies={this.props.visitorAcceptCookies}
          SuggestAcceptCookies={this.props.SuggestAcceptCookies}
          closeInfoCookies={this.props.closeInfoCookies}
        />
      </div>
    );
  }
}

export default UsefulInfo;