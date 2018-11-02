import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";


class Index extends Component {
  render() {
    return(
      <BrowserRouter basename="/techdegree-project-11">
        <App/>
      </BrowserRouter>
    );
  }
}



ReactDOM.render(<Index />, document.getElementById("root"));
registerServiceWorker();
