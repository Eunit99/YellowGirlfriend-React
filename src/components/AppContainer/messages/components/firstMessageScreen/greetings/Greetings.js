import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    const user = this.props.user,
      greetWithName = `Hello ${user}!`,
      greetWithoutName = `Hello!`;
    let didReadBriefDescription = this.props.didReadBriefDescription;
    var isVisitor;

      if (user !== undefined && user !== "") {
        isVisitor = false
      } else {
        isVisitor = true
      }
    // console.log(`isVisitor? ${isVisitor}`)

    return (
      <div className="greeting-container">
        <div className="long-into">
          {isVisitor ? greetWithoutName : greetWithName}
        </div>
        <div className="small-into">Welcome to yellow girlfriend.</div>

        <button
          onClick={didReadBriefDescription}
          className="btn btn-primary btn-outline-primary p-3 w-100 text-uppercase text-white"
        >
        Completed brief description
        </button>
      </div>
    );
  }
}

export default Greetings;