import React, { Component } from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import axios from "axios";
import "./App.css";
import dotenv from "dotenv";

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
    const searchQuery = event.target.textContent;
    if(searchQuery !== this.state.previusSearch){
      this.setLoading();
      this.setState({ previusSearch: searchQuery });
    }
  }

  // preformSearch requests data from flickr then sets the loading state to be false
  preformSearch = (query) => {
    axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&safe_search=${safeSearch}&tags=${query}&per_page=${numberOfImagesPerPage}&format=json&nojsoncallback=1`)
      .then((response) => {
        this.setState({
          images:response.data.photos.photo,
          loading: false,
          searchQuery: query
        });
      })
      .catch((error) => {
        // handle error
        // console.log("Error Getting DATA", error);
      });
  };

  //setLoading sets the state to be loading
  setLoading = () => {
    this.setState({loading: true});
  };

  render() {
    return (
      <BrowserRouter basename="/techdegree-project-11">
        <div className="container">
          <SearchForm setLoading={this.setLoading} previusSearch={this.state.searchQuery}/>
          <MainNavigation links={navLinks} HandleClick={this.HandleMainNavigationVisit}/>
          
          <Switch>

            {/*If you visit the root page it will take you to the cats page*/}
            <Redirect exact from="/" to="/Cats"/>

          {/*Any path in the root directory will preform a search*/}
            <Route exact path="/:query" render= { ({match}) =>
              {
                if(match.params.query !== this.state.searchQuery){
                  this.preformSearch(match.params.query);
                }
                return(
                  <Galery title={this.state.searchQuery} images={this.state.images} loading={this.state.loading}/>
                );
              }
            }/>

          {/*any route like /:query/something will give a 404 error*/}
            <Route component={E404}/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
