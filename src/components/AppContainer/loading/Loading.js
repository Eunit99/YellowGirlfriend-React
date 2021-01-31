import React, { Component } from 'react';
import '../../AppContainer/loading/assets/css/Loading.css'
import '../assets/css/animate.min.css'

class Loading extends Component {

  render() {
    return (
      <div class="load animated fadeIn">
        <span>loading...</span>
      </div>
    );
  }
}

export default Loading;