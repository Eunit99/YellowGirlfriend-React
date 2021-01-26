import React, { Component } from 'react';
import WelcomeInputContainer from './WelcomeInputContainer';

class HeroTextContainer extends Component {


  render() {
    let headingText = "We believe you know your girlfriend cheats on you*",
    hour = new Date().getHours();

    if (hour < 12) {
      headingText = "We believe you know your girlfriend cheats on you*"
    } else if (hour >= 12 && hour < 17) {
      headingText = "We believe your girlfriend cheats on you*"
    } else if (hour >= 17 && hour <= 21) {
      headingText = "We believe your girlfriend will cheat on you*"
    } else {
      headingText = "We believe girlfriends cheat*"
    }

    return (
      <div className="skweyed-content text-white">
        <div className="hero-heading mb-5">
          <h1>
            {headingText}
          </h1>
        </div>
        <div className="mb-2">
          <p>We're convinced your girlfriend cheats on you, if not, you wouldn't find yourself here!
          </p>
        </div>
        <div className="mb-5">
          <p>Anyways, take a few minutes to complete our assessment to better understand if your girlfriend is a
            "<span className="title-text">yellow girlfriend</span> "
          </p>
        </div>
				<WelcomeInputContainer />
      </div>
    );
  }
}

export default HeroTextContainer;