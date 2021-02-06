import React, { Component } from 'react';
import '../usefulinfo/assets/UsefulInfo.css'
import SuggestAcceptCookies from './components/suggestacceptcookies/suggestAcceptCookies';
// import SuggestInputName from './components/suggestinputname/SuggestInputName'

class UsefulInfo extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        {/* <SuggestInputName
          isMessageScreenDisplayed={this.props.isMessageScreenDisplayed}
          cookiesAccept={this.props.cookiesAccept}
          isCookiesConsentDisplayed={this.props.isCookiesConsentDisplayed}
          visitorAcceptCookies={this.props.visitorAcceptCookies}
          isSuggestInputNameDisplayed={this.state.isSuggestInputNameDisplayed}
        /> */}

        <SuggestAcceptCookies
          isMessageScreenDisplayed={this.props.isMessageScreenDisplayed}
          cookiesAccept={this.props.cookiesAccept}
          isCookiesConsentDisplayed={this.props.isCookiesConsentDisplayed}
          visitorAcceptCookies={this.props.visitorAcceptCookies}
          SuggestAcceptCookies={this.state.SuggestAcceptCookies}
        />
      </div>
    );
  }
}

export default UsefulInfo;