import React, { Component } from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import axios from "axios";
import "./App.css";
import apiKey from "./config";



// lightbox
import "lightbox2/dist/css/lightbox.min.css";
import "lightbox2/dist/js/lightbox-plus-jquery.min.js";

//Application Components
import MainNavigation from "./components/MainNavigation";
import SearchForm from "./components/SearchForm";
import Galery from "./components/Galery";

import E404 from "./components/E404";


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
      searchQuery: ""
    };
  }

  preformSearch = (query) => {
    axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&safe_search=${safeSearch}&tags=${query}&per_page=${numberOfImagesPerPage}&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images:response.data.photos.photo,
          loading: false,
          searchQuery: query
        })
      })
      .catch(error => {
      // handle error
      console.log("Error Getting DATA", error);
      })
  }

    setLoading = () =>{
      this.setState({loading: true});
    }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm setLoading={this.setLoading} previusSearch={this.state.searchQuery}/>
          <MainNavigation links={navLinks} setLoading={this.setLoading} previusSearch={this.state.searchQuery}/>
          
          <Switch>

            <Redirect exact from="/" to="cats"/>

            <Route exact path="/:query" render= {({match})=>
              {
                if(match.params.query !== this.state.searchQuery){
                  this.preformSearch(match.params.query);
                }
                return(
                  <Galery title={this.state.searchQuery} images={this.state.images} loading={this.state.loading}/>
                )
              }
            }/>

            <Route component={E404}/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
