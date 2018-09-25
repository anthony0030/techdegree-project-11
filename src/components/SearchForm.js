import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from './search.svg';
import {withRouter} from 'react-router-dom';


class SearchForm extends Component {    
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    this.props.history.push(this.query.value);
    e.currentTarget.reset();
  }


  render() {
    return (

      <form className="search-form" onSubmit={this.handleSubmit}>
        <input 
          type="search"
          onChange={this.onSearchChange}
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
  onSearch: PropTypes.func.isRequired
};

export default withRouter(SearchForm);