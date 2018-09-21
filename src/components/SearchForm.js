import React, { Component } from 'react';
import SearchIcon from './search.svg';
  
export default class SearchForm extends Component {
  render() {
    return (
      <form className="search-form">
        <input 
          type="search"
          name="search"
          placeholder="Search"
          required/>
        <button type="submit" className="search-button">
          <img src={SearchIcon} alt="SearchIcon" />
        </button>
      </form>
    );
  }
}