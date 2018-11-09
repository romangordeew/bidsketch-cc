import React from 'react';
import {connect} from "react-redux";
import calculateSum from "../utils/calculateSum";
import {activatePage} from "../actions/document";

const activatePageWrapper = (activatePage, i) => () => activatePage(i);

const PageIcon = ({activePage, activatePage, checkboxes, i}) => {
  const slice = checkboxes.slice(i * 2, i * 2 + 2);
  const sum = calculateSum(slice);
  return (
    <div
      onClick={activatePageWrapper(activatePage, i)}
      className={`${activePage === i ? 'active' : ''} page`}
    >
      <div className={`${sum === slice.length ? 'tick ' : 'page__sum'}`}>
        <p className={`${sum === slice.length ? 'tick__text ' : ''}`}>{sum} of {slice.length}</p>
      </div>
    </div>
  );
};


export default connect(({document: {activePage, checkboxes}}) => ({activePage, checkboxes}), {activatePage})(PageIcon);