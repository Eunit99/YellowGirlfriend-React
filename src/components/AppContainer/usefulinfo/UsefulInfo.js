import React, { Component } from 'react';
import '../usefulinfo/assets/UsefulInfo.css'
import SuggestAcceptCookies from './components/suggestacceptcookies/suggestAcceptCookies';
// import SuggestInputName from './components/suggestinputname/SuggestInputName'

class UsefulInfo extends Component {

  render() {
    return (
      <div>
        {/* <SuggestInputName
          isSuggestAcceptCookiesDisplayed={this.props.isSuggestAcceptCookiesDisplayed}
          isMessageScreenDisplayed={this.props.isMessageScreenDisplayed}
          cookiesAccept={this.props.cookiesAccept}
          isCookiesConsentDisplayed={this.props.isCookiesConsentDisplayed}
          visitorAcceptCookies={this.props.visitorAcceptCookies}
          isSuggestInputNameDisplayed={this.state.isSuggestInputNameDisplayed}
          closeInfo={this.props.closeInfo}
        /> */}

        <SuggestAcceptCookies
          isSuggestAcceptCookiesDisplayed={this.props.isSuggestAcceptCookiesDisplayed}
          isMessageScreenDisplayed={this.props.isMessageScreenDisplayed}
          cookiesAccept={this.props.cookiesAccept}
          isCookiesConsentDisplayed={this.props.isCookiesConsentDisplayed}
          visitorAcceptCookies={this.props.visitorAcceptCookies}
          SuggestAcceptCookies={this.props.SuggestAcceptCookies}
          closeInfo={this.props.closeInfo}
        />
      </div>
    );
  }
}

export default UsefulInfo;