import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchIcon from "./search.svg";
import {withRouter} from "react-router-dom";


class SearchForm extends Component {

// if the search query is different from the current one it will set the state to be loading and send the browser to the new search
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.query.value !== this.props.previusSearch){
      this.props.history.push(this.query.value);
      this.props.setLoading();
    }
  }


  // returns a search form
  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input 
          type="search"
          name="search"
          placeholder="Search"
          ref={(input) => this.query = input}
          required/>
        <button type="submit" className="search-button">
          <img src={SearchIcon} alt="SearchIcon" />
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  setLoading: PropTypes.func.isRequired,
  previusSearch: PropTypes.string.isRequired,
};

export default withRouter(SearchForm);