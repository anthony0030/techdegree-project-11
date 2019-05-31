import React from "react";
import PropTypes from "prop-types";
import SearchIcon from "./search.svg";

function SearchForm(props) {
  // returns a search form
  const { HandleSearch, searchQuery } = props;
  return (
    <form className="search-form" onSubmit={HandleSearch}>
      <input
        id="SearchQuery"
        type="search"
        name="search"
        placeholder="Search"
        defaultValue={searchQuery}
        required/>
      <button type="submit" className="search-button">
        <img src={SearchIcon} alt="SearchIcon" />
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  HandleSearch: PropTypes.func.isRequired,
  searchQuery: PropTypes.string
};

export default SearchForm;
