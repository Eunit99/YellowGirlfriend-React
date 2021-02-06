import React, { Component } from 'react';
import './assets/css/CookiesConsent.css'
import '../../../assets/css/animate.min.css'

class CookiesConsent extends Component {

  render() {
    let isCookiesConsentDisplayed = this.props.isCookiesConsentDisplayed,
        visitorAcceptCookies = this.props.visitorAcceptCookies,
        shakeAcceptLearnBtn = this.props.shakeAcceptLearnBtn

    // For development use only
    // console.log(`isCookiesConsentDisplayed? ${isCookiesConsentDisplayed}`)
    // console.log(`visitorAcceptCookies? ${visitorAcceptCookies}`)

    return (
      <div className="cookies-consent">
        {isCookiesConsentDisplayed &&
          <div className={`
            cookies-consent-container animated
            ${ isCookiesConsentDisplayed ? "slideInUp" : "" }
            ${ visitorAcceptCookies ? "slideOutDown" : "" }
          `}>
          <div className="row cookies-consent-text cookies-consent-text--span">
            <div className="col-12 mx-1">
              <div className="cookies-title mb-2 text-left">
                Notice
              </div>
              <span className="my-2 text-left">
                This website or its third-party tools use cookies, which are necessary for its 
                functioning and required to achieve the purposes illustrated in the 
                <span
                  className="cookies-cta-inline"
                  id="tos"
                  onClick={this.props.displayTermsOfService}
                > cookie policy</span>.
              </span>
              &nbsp;
              <span className="my-2 text-left">
                You accept the use of cookies by closing or dismissing this notice, 
                by scrolling this page, by clicking a link or button or by continuing to browse otherwise.
              </span>
            </div>
          </div>
          <div className="row cookies-consent-text mt-3 mt-sm-4">
            <div className={`col-6 animated ${shakeAcceptLearnBtn ? "shake" : ""}`}>
              <span
                id="tos"
                className="cookies-cta cookies-cta--learn animated"
                onClick={() => { this.props.learnMoreAboutCookies();}}
              >
                Learn more
              </span>
            </div>
            <div className={`col-6 text-right animated ${shakeAcceptLearnBtn ? "shake" : ""}`}>
              <span
                id="cookiesAccept"
                className="cookies-cta cookies-cta--accept animated"
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