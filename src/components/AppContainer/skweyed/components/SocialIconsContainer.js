import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

class SocialIconsContainer extends Component {

  constructor() {
    super()
    this.state = {
      isSocialIconsHidden: true
    }
  }

  render() {
    setTimeout(() => {
      this.setState({
        isSocialIconsHidden: false
      })
    }, 180000); //Displays the social icons in 3 minutes

    return (
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-2 text-left">
          {this.state.isSocialIconsHidden ? "" :
          <div className="social-icons">
            <ul className="list-unstyled mb-0">
              <li className="list-unstyled-item">
                <a href="https://twitter.com/eunit99">
                  <FontAwesomeIcon icon={['fab', 'twitter']} size="sm" />
                </a>
              </li>
              <li className="list-unstyled-item">
                <a href="https://facebook.com/eunit99">
                  <FontAwesomeIcon icon={['fab', 'facebook']} size="sm" />
                </a>
              </li>
              <li className="list-unstyled-item">
                <a href="https://linkedin.com/in">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} size="sm" />
                </a>
              </li>
            </ul>
          </div>
          }
        </div>
         {/* Offsetting to position social icons */}
        <div className="offset-0 offset-md-10"></div>
         {/* /Offsetting to position social icons */}
      </div>
    );
  }
}

export default SocialIconsContainer;