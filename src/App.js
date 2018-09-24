import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios'
import './App.css';
import apiKey from './config'


//Application Components
import MainNavigation from './components/MainNavigation'
import SearchForm from './components/SearchForm'
import Galery from './components/Galery'

import NotFound from './components/NotFound';

class App extends Component {


  constructor() {
    super();
    this.state = {
      images: [],
      loading: true,
      searchQuery: "cat"
    };
  }

  componentDidMount() {
    this.preformSearch();
  }

  preformSearch = (query = this.state.searchQuery) => {
    const numberOfImagesPerPage = 50;
    const safeSearch = 1;
    
    // Safe search setting:
    // 1 for safe.
    // 2 for moderate.
    // 3 for restricted.

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


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.preformSearch}/>
          <MainNavigation />
          
          <Switch>

            <Redirect exact from='/' to={this.state.searchQuery}/>

            <Route exact path="/:query" render= {({match})=>
              {
                if(match.params.query !== this.state.searchQuery){
                  this.preformSearch(match.params.query)
                }
                return(
                  <Galery title={match.params.query} images={this.state.images} loading={this.state.loading}/>
                )
              }
            }/>

            <Route component={NotFound}/>

          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
