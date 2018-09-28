import React, { Component } from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";


class MainNavigation extends Component {

  //if the link is different to the page you are on it will set the state to be loading
  handleSubmit = (e) => {
    if(e.target.textContent !== this.props.previusSearch){
      this.props.setLoading();
    }
  }


  // returns a navigation with links pragmatically from an array of strings
  render() {
    return(
      <nav className="main-nav">
        <ul>
          {
            this.props.links.map(
              (link, index) =>
                <li key={index} onClick={this.handleSubmit} >
                  <NavLink exact to={"/"+link}>{link}</NavLink>
                </li>
            )
          }
        </ul>
      </nav>
    );
  }
}

MainNavigation.propTypes = {
  links: PropTypes.array.isRequired,
  setLoading: PropTypes.func.isRequired,
  previusSearch: PropTypes.string.isRequired,
};

export default MainNavigation;