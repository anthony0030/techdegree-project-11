import React from "react";
import IMG404 from "./404.jpg";

// returns a 404 error
function E404() {
  return (
    <ul>
      <li className="not-found">
        <h1>404 someone took this page</h1>
        <img src={IMG404} alt="Error 404 Page Not Found" />
      </li>
    </ul>
  );
}

export default E404;
