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
      className={`${sum === slice.length ? 'tick' : ''} ${activePage === i ? 'active' : ''}`}
    >
      {sum} of {slice.length}
    </div>
  );
};


export default connect(({document: {activePage, checkboxes}}) => ({activePage, checkboxes}), {activatePage})(PageIcon);