import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    const user = this.props.user,
      greetWithName = `Hello ${user}!`,
      greetWithoutName = `Hello!`;
      var isVisitor;

      if (user !== undefined) {
        isVisitor = false
      } else {
        isVisitor = true
      }
    console.log(`isVisitor? ${isVisitor}`)

    return (
      <div className="greeting-container">
        <div className="long-into">
          {isVisitor ? greetWithoutName : greetWithName}
        </div>
        <div className="small-into">Welcome to yellow girlfriend.</div>
      </div>
    );
  }
}

export default Greetings;