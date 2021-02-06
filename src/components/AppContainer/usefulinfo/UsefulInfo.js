import React, { Component } from 'react';
import '../usefulinfo/assets/UsefulInfo.css'
import SuggestInputName from './components/suggestinputname/SuggestInputName'

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
        <SuggestInputName
          isMessageScreenDisplayed={this.props.isMessageScreenDisplayed}
          cookiesAccept={this.props.cookiesAccept}
          isCookiesConsentDisplayed={this.props.isCookiesConsentDisplayed}
          visitorAcceptCookies={this.props.visitorAcceptCookies}
          isSuggestInputNameDisplayed={this.state.isSuggestInputNameDisplayed}
        />
      </div>
    );
  }
}

export default UsefulInfo;