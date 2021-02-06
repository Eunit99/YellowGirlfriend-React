import React, { Component } from 'react';
import '../suggestinputname/assets/SuggestInputName.css';
import exclamation24 from '../../assets/img/exclamation-24.png';
import exclamation48 from '../../assets/img/exclamation-48.png';


class SuggestInputName extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let isSuggestInputNameDisplayed = this.props.isSuggestInputNameDisplayed

    // For development use only
    // console.log(`isSuggestInputNameDisplayed? ${isSuggestInputNameDisplayed}`)
    

    return (
      <div className="info-container">
        {/* {isSuggestInputNameDisplayed && */}
        <div className={`
          animated
          ${isSuggestInputNameDisplayed && "slideInDown"}
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
                Please enter your first name to start the test.
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


export default SuggestInputName;