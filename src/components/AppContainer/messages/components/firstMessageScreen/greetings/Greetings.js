import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    const user = this.props.user;
    let greetingText;
    if (user !== "") {
      greetingText = `Hello ${user}!`
    } else {
      greetingText = `Hello!`
    }

    return (
      <div className="greeting-container">
        <div className="long-into">
            {greetingText} 
        </div>
        <div className="small-into">Welcome to yellow girlfriend.</div>
      </div>
    );
  }
}

export default Greetings;