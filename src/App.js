import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import "./App.css";

// lightbox
import "lightbox2/dist/css/lightbox.min.css";
import "lightbox2/dist/js/lightbox-plus-jquery.min.js";

//Application Components
import MainNavigation from "./components/MainNavigation";
import SearchForm from "./components/SearchForm";
import Galery from "./components/Galery";

import E404 from "./components/E404";


const apiKey = process.env.REACT_APP_FLICKR_API_KEY;

const navLinks = ["Cats", "Dogs", "Computers", "Coffee"];
const numberOfImagesPerPage = 48;
const safeSearch = 1;

// Safe search setting:
// 1 for safe.
// 2 for moderate.
// 3 for restricted.

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      loading: true,
      searchQuery: "",
      previusSearch: ""
    };
  }

  HandleMainNavigationVisit = (event) => {
    const searchQuery = event.target.textContent.toLowerCase();
    this.setLoading(searchQuery);
  }

// if the search query is different from the current one it will set the state to be loading and send the browser to the new search
  HandleSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.target.querySelector("#SearchQery").value;
    if( this.setLoading(searchQuery)){
      this.props.history.push(searchQuery)
    }
  }

  // preformSearch requests data from flickr then sets the loading state to be false
  preformSearch = (query) => {
    if(query !== this.state.previusSearch){
    axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&safe_search=${safeSearch}&tags=${query}&per_page=${numberOfImagesPerPage}&format=json&nojsoncallback=1`)
      .then((response) => {
        this.setState( (state, props) =>({
          images: response.data.photos.photo,
          loading: false,
          previusSearch: state.searchQuery,
          searchQuery: query
        }));
      })
      .catch((error) => {
        // handle error
        // console.log("Error Getting DATA", error);
      });
    }
  };

  //setLoading sets the state to be loading
  setLoading = (searchQuery) => {
    if(searchQuery !== this.state.previusSearch){
      this.setState({loading: true});
      return true;
    }
    return false;
  };

  render() {
    return (
      <div className="container size-101vh">
        <SearchForm HandleSearch={this.HandleSearch} searchQuery={this.state.searchQuery}/>
        <MainNavigation links={navLinks} HandleClick={this.HandleMainNavigationVisit}/>
        <Switch>

          {/*If you visit the root page it will take you to the cats page*/}
          <Redirect exact from="/" to="/cats"/>



        {/*Any path in the root directory will preform a search*/}
          <Route exact path="/:query" render= { ({match}) =>
            {
              this.preformSearch(match.params.query);
              return( <Galery title={this.state.searchQuery} images={this.state.images} loading={this.state.loading}/> );
            }
          }/>

        {/*any route like /:query/something will give a 404 error*/}
          <Route component={E404}/>
        </Switch>
      </div>
    );
  }
}


export default withRouter(App);