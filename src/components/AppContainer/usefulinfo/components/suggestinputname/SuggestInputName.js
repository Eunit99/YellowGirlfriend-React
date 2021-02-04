import React, { Component } from 'react';

class SuggestInputName extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    let isSuggestInputNameDisplayed = this.props.isSuggestInputNameDisplayed

    // For development use only
    // console.log(`isSuggestInputNameDisplayed? ${isSuggestInputNameDisplayed}`)

    return (
      <div className="cookies-consent">
        {isSuggestInputNameDisplayed &&
          <div className={`
            cookies-consent-container animated
            ${isSuggestInputNameDisplayed && "slideInUp"}
          `}>
            <div className="row cookies-consent-text cookies-consent-text--span">
              <div className="col-12 mx-1">
                <div className="cookies-title mb-2 text-left">
                  Notice
              </div>
                <span className="my-2 text-left">
                  This website or its third-party tools use cookies, which are necessary for its
                  functioning and required to achieve the purposes illustrated in the
                <span className="cookies-cta-inline" id="tos"> cookie policy</span>.
              </span>
              &nbsp;
              <span className="my-2 text-left">
                  You accept the use of cookies by closing or dismissing this notice,
                  by scrolling this page, by clicking a link or button or by continuing to browse otherwise.
              </span>
              </div>
            </div>
            <div className="row cookies-consent-text mt-3 mt-sm-4">
              <div className="col-6">
                <span
                  id="tos"
                  className="cookies-cta cookies-cta--learn"
                  onClick={this.props.learnMoreAboutCookies}
                >
                  Learn more
              </span>
              </div>
              <div className="col-6 text-right">
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

SuggestInputName.propTypes = {

};

export default SuggestInputName;