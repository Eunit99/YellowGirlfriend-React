import React, { Component } from 'react';
import '../suggestinputname/assets/SuggestInputName.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
      <div className="input-name-container">
        {isSuggestInputNameDisplayed &&
          <div className={`
            animated
            ${isSuggestInputNameDisplayed && "slideInDown"}
          `}>
            {/* Content goes here */}
          <FontAwesomeIcon icon={['far', 'fawarning']} size="lg" />
            <span
              id="closeInfo"
              className=""
              onClick={this.props.closeInfo}
            >
              Close
            </span>

          </div>
        }
      </div>
    );
  }
}


export default SuggestInputName;