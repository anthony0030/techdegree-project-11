import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import apiKey from './config'


//Application Components
import MainNavigation from './components/MainNavigation'
import SearchForm from './components/SearchForm'
import ImageList from './components/ImageList'

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
    axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${numberOfImagesPerPage}&format=json&nojsoncallback=1`)
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
      <div className="container">
        
        <SearchForm onSearch={this.preformSearch}/>
        <MainNavigation />

        <div className="photo-container">
          <h2>Results</h2>
          { (this.state.loading) ? <p>loading...</p> : <ImageList data={this.state.images}/> }
        </div>

      </div>
    );
  }
}

export default App;
