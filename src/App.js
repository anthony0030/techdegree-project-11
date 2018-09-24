import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
      loading: true
    };
  }


  componentDidMount() {
    this.preformSearch();
  }

  preformSearch = (query = 'cats') => {
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
          loading: false
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
          <Galery title="Results" images={this.state.images} loading={this.state.loading}/>
          <Switch>
            <Route exact path="/" component={NotFound}/>
            <Route path="/:name" component={NotFound}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
