import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchIcon from "./search.svg";
import {withRouter} from "react-router-dom";


class SearchForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.query.value !== this.props.previusSearch){
      this.props.history.push(this.query.value);
      this.props.setLoading();
    }
  }


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