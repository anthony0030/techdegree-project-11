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
let PageChange = false;

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiKey: process.env.REACT_APP_FLICKR_API_KEY,
      navLinks: ["Cats", "Dogs", "Computers", "Coffee"],
      numberOfImagesPerPage: 48,
      numberOfPages: 0,
      curentPage: 1,
      safeSearch: 1,
      images: [],
      amountOfResults: "0",
      loading: true,
      searchQuery: "",
      photoIndex: 0,
      isOpen: false
    };
  }

// numberOfImagesPerPage setting
// How may images to load per page


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
    const { apiKey, safeSearch, numberOfImagesPerPage, curentPage} = this.state;
    if(((query !== this.state.searchQuery) && allowSearch)||PageChange){
      allowSearch = false;
      PageChange = false;
      const SearchUrl = 
        `
          https://api.flickr.com/services/rest/
          ?method=flickr.photos.search
          &api_key=${apiKey}
          &safe_search=${safeSearch}
          &per_page=${numberOfImagesPerPage}
          &format=json
          &nojsoncallback=1
          &tags=${query}
          &page=${curentPage}
        `.replace(/\s+/g, "")// This will remove the spaces from the multi-line code indentation //

      axios
      .get(SearchUrl)
      .then((response) => {
        console.log(response.data);
        this.setState( (state, props) =>({
          images: response.data.photos.photo,
          amount: response.data.photos.total,
          numberOfPages: response.data.photos.pages,
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

  setPage = (event) => {
    PageChange = true;
    const pageToSet = parseInt(event.target.value);
    // console.log("im setting the page to a type of: ", typeof(pageToSet))
    // console.log("page set to:", pageToSet);
    this.setState({ curentPage: pageToSet });
  }



  render() {
    const { photoIndex, isOpen, images, amount, numberOfPages, curentPage, searchQuery, navLinks, loading, HandleSearch } = this.state;
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
          searchQuery={this.searchQuery}
        />
        <MainNavigation
          links={navLinks}
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
                amountOfResults={amount}
                BuildFlikerUrl={this.BuildFlikerUrl}
                curentPage={curentPage}
                HandleImageClick={this.HandleImageClick}
                images={images}
                loading={loading}
                numberOfPages={numberOfPages}
                setPage={this.setPage}
                title={searchQuery}
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