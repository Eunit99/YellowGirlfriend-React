import React, { Component } from 'react';
import '../suggestacceptcookies/assets/suggestAcceptCookies.css';
import exclamation24 from '../../assets/img/exclamation-24.png';
import exclamation48 from '../../assets/img/exclamation-48.png';


class SuggestAcceptCookies extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let isSuggestAcceptCookiesDisplayed = this.props.isSuggestAcceptCookiesDisplayed

    // For development use only
    // console.log(`isSuggestAcceptCookiesDisplayed? ${isSuggestAcceptCookiesDisplayed}`)
    

    return (
      <div className="info-container">
        {/* {isSuggestAcceptCookiesDisplayed && */}
        <div className={`
          animated
          ${isSuggestAcceptCookiesDisplayed && "slideInDown"}
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
                Please accept cookies terms to start the test.
              </span>
            </div>

            <div className="col-1">
              <span
                className="close-btn"
                id="closeInfo"
                onClick={this.props.closeInfo}
              >
                x
              </span>
            </div>
          </div>
        </div>
        {/* } */}
      </div>
    );
  }
}


export default SuggestAcceptCookies;