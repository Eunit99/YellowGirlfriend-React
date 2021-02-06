import React, { Component } from 'react';
import '../suggestacceptcookies/assets/suggestAcceptCookies.css';
import exclamation24 from '../../assets/img/exclamation-24.png';
import exclamation48 from '../../assets/img/exclamation-48.png';


class SuggestAcceptCookies extends Component {

  render() {
    let isSuggestAcceptCookiesDisplayed = this.props.isSuggestAcceptCookiesDisplayed

    // For development use only
    // console.log(`isSuggestAcceptCookiesDisplayed? ${isSuggestAcceptCookiesDisplayed}`)
    

    return (
      <div className="contain">
        {isSuggestAcceptCookiesDisplayed ? 
          <div className={`
            info-container
            animated
            ${isSuggestAcceptCookiesDisplayed ? "slideInDown" : ""}
            `}
          >
            {/* Content goes here */}
            <div className="row">
              <div className="col-2">
                <img
                  srcSet={exclamation48}
                  src={exclamation24}
                  alt="Info icon"
                />
              </div>

              <div className="col-8">
                <span className="info-text">
                  Please accept our Terms of Service to start the test.
                </span>
              </div>

              <div className="col-1">
                <span
                  className="close-btn"
                  id="closeInfo"
                  onClick={this.props.closeInfoCookies}
                  title="Close"
                >
                  x
                </span>
              </div>
            </div>
          </div>
        : "" }
      </div>
    );
  }
}


export default SuggestAcceptCookies;