import React, { Component } from 'react';
import './App.css';


//Application Components
import MainNavigation from './components/MainNavigation'
import SearchForm from './components/SearchForm'
import ImageList from './components/ImageList'

class App extends Component {


  constructor() {
    super();
    this.state = {
      images: [
        "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
        "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
        "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
        "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg"
      ],
      loading: false
    };
  }



  render() {
    return (
      <div className="container">
        
        <SearchForm />
        <MainNavigation />

        <div className="photo-container">
          <h2>Results</h2>
          {
            (this.state.loading)
            ? <p>loading...</p>
            :<ImageList data={this.state.images}/>
          }
        </div>

      </div>
    );
  }
}

export default App;
