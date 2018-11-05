import React from "react";
import PropTypes from "prop-types";

import PagesButton from "./PagesButton";


// Returns a list a page selector
function Pages(props) {
  const {numberOfPages, curentPage, setPage} = props;
  return (
    <nav aria-label="Page navigation">
      <ul className="change-page_list">
        <PagesButton setPage={setPage} text="Previous" value={curentPage-1} disabled={curentPage<=1? true : false}/>
        <PagesButton setPage={setPage} text={curentPage-2} value={curentPage-2} hide={numberOfPages>curentPage} />
        <PagesButton setPage={setPage} text={curentPage-1} value={curentPage-1} hide={curentPage<=1} />
        <PagesButton setPage={setPage} text={curentPage} value={curentPage} className="active" />
        <PagesButton setPage={setPage} text={curentPage+1} value={curentPage+1} hide={curentPage>=numberOfPages} />
        <PagesButton setPage={setPage} text={curentPage+2} value={curentPage+2} hide={curentPage>1} />
        <PagesButton setPage={setPage} text="Next" value={curentPage+1} disabled={numberOfPages<=curentPage? true : false}/>
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