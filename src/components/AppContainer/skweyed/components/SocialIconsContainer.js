import React, { Component } from 'react';

class SocialIconsContainer extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-2 text-left">
          <div className="social-icons">
            <ul className="list-unstyled mb-0">
              <li className="list-unstyled-item">
                <a href="https://twitter.com/eunit99">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-unstyled-item">
                <a href="https://facebook.com/eunit99">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-unstyled-item">
                <a href="https://github.com/eunit99/yellowgirlfriend">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
         {/* Offsetting to position social icons */}
        <div className="offset-0 offset-md-10"></div>
         {/* /Offsetting to position social icons */}
      </div>
    );
  }
}

export default SocialIconsContainer;