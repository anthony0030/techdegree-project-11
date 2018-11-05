import React from "react";
import PropTypes from "prop-types";


// Returns a list a page selector
function Pages(props) {
  const {numberOfPages, curentPage, setPage} = props;
  return (
    <nav aria-label="Page navigation">
      <ul className="change-page_list">

        <li className="change-page_button-container">
          <button className="change-page_button-button" onClick={setPage} value={curentPage-1} disabled={curentPage<=1? true : false}> Previous</button>
        </li>

        { numberOfPages<=curentPage?
          <li className="change-page_button-container">
            <button className="change-page_button-button" onClick={setPage} value={curentPage-2} >{curentPage-2}</button>
          </li>
        : null }

        { curentPage>1?
          <li className="change-page_button-container">
            <button className="change-page_button-button" onClick={setPage} value={curentPage-1} >{curentPage-1}</button>
          </li>
        : null }

        <li className="change-page_button-container">
          <button className="change-page_button-button active" onClick={setPage} value={curentPage} >{curentPage}</button>
        </li>
        { curentPage<numberOfPages?
          <li className="change-page_button-container">
            <button className="change-page_button-button" onClick={setPage} value={curentPage+1} >{curentPage+1}</button>
          </li>
        : null }
        {curentPage<=1?
          <li className="change-page_button-container">
            <button className="change-page_button-button" onClick={setPage} value={curentPage+2} >{curentPage+2}</button>
            </li>
        : null }
        <li className="change-page_button-container">
          <button className="change-page_button-button" onClick={setPage} value={curentPage+1} disabled={numberOfPages<=curentPage? true : false} >Next</button>
        </li>

      </ul>
    </nav>
  );
}

Pages.propTypes = {
  numberOfPages: PropTypes.number.isRequired,
  curentPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
};

export default Pages;