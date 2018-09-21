import React, { Component } from 'react';
import SearchIcon from './search.svg';
  
export default class SearchForm extends Component {

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
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