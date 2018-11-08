import React from 'react';
import {Checkbox, OverlayTrigger, Tooltip} from "react-bootstrap";
import {connect} from "react-redux";
import {checkboxSwitched} from "../actions/document";

const checkboxSwitchedWrapper = (checkboxSwitched, id) => () => checkboxSwitched(id);

const Overlay = (
  <Tooltip id="tooltip">
    Click to CHECK
  </Tooltip>
);

const MyCheckbox = ({checkboxSwitched, checkboxes, id, ...props}) => (
  <OverlayTrigger placement="top" overlay={Overlay}>
    <Checkbox
      checked={checkboxes[id].checked}
      onChange={checkboxSwitchedWrapper(checkboxSwitched, id)}
      {...props}
    />
  </OverlayTrigger>
);

export default connect(({document: {checkboxes}}) => ({checkboxes}), {checkboxSwitched})(MyCheckbox);