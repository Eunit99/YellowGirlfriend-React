import React, { Component } from 'react';

class HeroTextContainer extends Component {
  render() {
    return (
      <div className="skweyed-content text-white">
        <div className="hero-heading mb-5">
          <h1>
            We believe you know your girlfriend cheats on you<sup>*</sup>
          </h1>
        </div>
        <div className="mb-2">
          <p>We're convinced your girlfriend cheats on you, if not, you wouldn't find yourself here!
          </p>
        </div>
        <div className="mb-5">
          <p>Anyways, take a few minutes to complete our assessment to better understand if your girlfriend is a "
            <span className="title-text">yellow girlfriend</span> "
          </p>
        </div>
      </div>
    );
  }
}

export default HeroTextContainer;