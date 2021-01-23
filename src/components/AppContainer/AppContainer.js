import React, { Component } from 'react';
import './assets/css/animate.min.css'
import './assets/css/linearicons.min.css'
import './assets/css/normalize.min.css'
import './assets/css/reset.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import './AppContainer.css'
import Skweyed from './skweyed/Skweyed';
import Messages from './messages/Messages';


class AppContainer extends Component {

  render() {
    return (
      <div>
        <div className="overlay"></div>
        <div className="skweyed">
          <div className="container-fluid m-0 p-0 h-100">
            <div className="skweyed--bg"></div>
            <div className="content">
              <div className="row h-100">
                {/* Content starts here */}
                <Skweyed />
                <Messages />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppContainer;