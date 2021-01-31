import React, { Component } from 'react';
import '../../AppContainer/loading/assets/css/Loading.css'
import '../assets/css/animate.min.css'

class Loading extends Component {

  render() {
    return (
      <div className="load animated fadeIn">
        <span>loading...</span>
      </div>
    );
  }
}

export default Loading;