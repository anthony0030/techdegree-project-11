import React from "react";

// returns a not found page
function NotFound(props){
  return(
    <div className="not-found">
      <h3>No Results Found</h3>
      <p>You search for <strong>{props.title}</strong> did not return any results. Please try again.</p>
    </div>
  );
}

export default NotFound;