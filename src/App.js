import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import "./App.css";

// lightbox
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css'; // This only needs to be imported once in your app

//Application Components
import MainNavigation from "./components/MainNavigation";
import SearchForm from "./components/SearchForm";
import Galery from "./components/Galery";

import E404 from "./components/E404";


let allowSearch = true;

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiKey: process.env.REACT_APP_FLICKR_API_KEY,
      navLinks: ["Cats", "Dogs", "Computers", "Coffee"],
      numberOfImagesPerPage: 48,
      safeSearch: 1,
      images: [],
      amount: 0,
      loading: true,
      searchQuery: "",
      photoIndex: 0,
      isOpen: false
    };
  }


// Safe search setting:
// 1 for safe.
// 2 for moderate.
// 3 for restricted.

  HandleMainNavigationVisit = (event) => {
    const searchQuery = event.target.textContent.toLowerCase();
    this.setLoading(searchQuery);
  }


  BuildFlikerUrl(image){
    return(`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`)
  }

  HandleImageClick = (event) => {
    const photoIndex = event.target.getAttribute('index')
    this.setState({ 
      isOpen: true,
      photoIndex: photoIndex
    })
  }


// if the search query is different from the current one it will set the state to be loading and send the browser to the new search
  HandleSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.target.querySelector("#SearchQery").value.toLowerCase();
    if( this.setLoading(searchQuery)){
      this.props.history.push(searchQuery)
    }
  }

  // preformSearch requests data from flickr then sets the loading state to be false
  preformSearch = (query) => {
    // console.log("Search query is diferant from the current one:", query !== this.state.searchQuery, query, this.state.searchQuery)
    // console.log("Program is allowed to search for images on api:", allowSearch)
    if((query !== this.state.searchQuery) && allowSearch){
      allowSearch = false;
      const SearchUrl = 
        `
          https://api.flickr.com/services/rest/
          ?method=flickr.photos.search
          &api_key=${this.state.apiKey}
          &safe_search=${this.state.safeSearch}
          &per_page=${this.state.numberOfImagesPerPage}
          &format=json
          &nojsoncallback=1
          &tags=${query}
        `.replace(/\s+/g, "")// This will remove the spaces from the multi-line code indentation //

      axios
      .get(SearchUrl)
      .then((response) => {
        this.setState( (state, props) =>({
          images: response.data.photos.photo,
          amount: response.data.photos.total,
          loading: false,
          searchQuery: query
        }));
        allowSearch = true;
      })
      .catch((error) => {
        // handle error
        // console.log("Error Getting DATA", error);
      });
    }
  };

  //setLoading sets the state to be loading
  setLoading = (searchQuery) => {
    if(searchQuery !== this.state.searchQuery){
      this.setState({ loading: true });
      return true;
    }
    return false;
  };

  render() {
    const { photoIndex, isOpen, images, amount } = this.state;
    return (
      <div className="container size-101vh">

        {isOpen && (
          <Lightbox
            mainSrc={this.BuildFlikerUrl(images[photoIndex])}
            nextSrc={this.BuildFlikerUrl(images[(photoIndex + 1) % images.length])}
            prevSrc={this.BuildFlikerUrl(images[(photoIndex + images.length - 1) % images.length])}
            imageTitle={images[photoIndex].title}
            imageCaption={images[photoIndex].title}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}

        <SearchForm 
          HandleSearch={this.HandleSearch}
          searchQuery={this.state.searchQuery}
        />
        <MainNavigation
          links={this.state.navLinks}
          HandleClick={this.HandleMainNavigationVisit}
        />
        <Switch>

          {/*If you visit the root page it will take you to the cats page*/}
          <Redirect exact from="/" to="/cats"/>

          {/*Any path in the root directory will preform a search*/}
          <Route exact path="/:query" render= { ({match}) =>{
            this.preformSearch(match.params.query);
            return(
              <Galery
                title={this.state.searchQuery}
                images={this.state.images}
                amount={amount}
                loading={this.state.loading}
                HandleImageClick={this.HandleImageClick}
                BuildFlikerUrl={this.BuildFlikerUrl}
              />
            );
          }}/>

          {/*any route like /:query/something will give a 404 error*/}
          <Route component={E404} />

        </Switch>
      </div>
    );
  }
} //End of App


export default withRouter(App);