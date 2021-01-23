import React, { Component } from 'react';
import WelcomeInputContainer from './WelcomeInputContainer';

class HeroTextContainer extends Component {

  constructor() {
    super()
    this.state = {
      initialTextState: true,
      headingText: "We believe your girlfriend cheats on you*"
    }
  }
    
  
  render() {
    setTimeout(() => {
      this.setState(() => {
        return {
          initialTextState: !this.state.initialTextState
        }
      })
    }, 3000);
    console.log(this.state.initialTextState);


    // if (this.state.initialTextState) {
    //   this.setState({
    //     headingText: "We believe your girlfriend cheats on you*"
    //   })
    // } else {
    //   this.setState({
    //     headingText: "We believe your girlfriend cheats on you*"
    //   })
    // }

    return (
      <div className="skweyed-content text-white">
        <div className="hero-heading mb-5">
          <h1>
            {this.state.headingText}
          </h1>

          {/*  We believe you know your girlfriend cheats on you* */}
          {/* We believe your girlfriend cheats on you* */}


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
				<WelcomeInputContainer />
      </div>
    );
  }
}

export default HeroTextContainer;