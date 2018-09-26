import React, { Component } from "react";
import SearchIcon from "./search.svg";
import {withRouter} from "react-router-dom";


class SearchForm extends Component {    
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(this.query.value);
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


export default withRouter(SearchForm);