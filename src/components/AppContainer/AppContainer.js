import React, { Component } from 'react';
import './assets/css/animate.min.css'
import './assets/css/linearicons.min.css'
import './assets/css/normalize.min.css'
import './assets/css/reset.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import './AppContainer.css'


class AppContainer extends Component {
  
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h1 className="skweyed skweyed-content hero-heading">Yellow Girlfriend is coming</h1>
            <p>This is the general container</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AppContainer;