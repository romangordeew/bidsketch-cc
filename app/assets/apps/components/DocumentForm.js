import React from 'react';
import Checkbox from "./Checkbox";
import {connect} from "react-redux";

const renderCheckbox = ({id, ...props}) => (
  <Checkbox
    key={id}
    id={id}
    {...props}
  />
);

const DocumentForm = ({activePage, checkboxes}) => {
  const slice = checkboxes.slice(activePage * 2, activePage * 2 + 2);
  return (
    <div>
      {slice.map(renderCheckbox)}
    </div>
  );
};

export default connect(({document: {activePage, checkboxes}}) => ({activePage, checkboxes}))(DocumentForm);