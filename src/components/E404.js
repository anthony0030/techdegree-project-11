import React from "react";
import IMG404 from "./404.jpg";

function E404() {
  return (
    <ul>
      <li className="not-found">
        <h1>404 someone took this page</h1>
        <img src={IMG404} alt="Logo" />
      </li>
    </ul>
  )
}

export default E404;