import React, { Component } from 'react';
import './assets/css/CookiesConsent.css'

class CookiesConsent extends Component {
  

  render() {
    // For development use only
    // console.log(`isCookiesConsentDisplayed? ${this.props.isCookiesConsentDisplayed}`)
    return (
      <div className="cookies-consent">
        {this.props.isCookiesConsentDisplayed &&
          <div className="cookies-consent-container">
          <div className="row cookies-consent-text">
            <div className="col-12 mx-1">
              <div className="cookies-title mb-2 text-left">
                Notice
              </div>
              <div className="my-2 text-left">
                This website or its third-party tools use cookies, which are necessary for its 
                functioning and required to achieve the purposes illustrated in the 
                <span className="cookies-cta-inline" id="tos"> cookie policy</span>.
              </div>
              <div className="my-2 text-left">
                You accept the use of cookies by closing or dismissing this notice, 
                by scrolling this page, by clicking a link or button or by continuing to browse otherwise.
              </div>
            </div>
          </div>

          <div className="row cookies-consent-text mt-3 mt-sm-4">
            <div className="col-6">
              <span
                id="tos"
                className="cookies-cta cookies-cta--learn"
                onClick={this.props.learnMoreAboutCookies}
              >Learn more
              </span>
            </div>
            <div className="col-6">
              <span
                id="cookiesAccept"
                className="cookies-cta cookies-cta--accept"
                onClick={this.props.cookiesAccept}
              > Accept
              </span>
            </div>
          </div>

        </div>
        }
      </div> 
    );
  }
}


export default CookiesConsent;