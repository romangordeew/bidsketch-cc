import React from 'react';
import {Checkbox, OverlayTrigger, Tooltip} from "react-bootstrap";
import {connect} from "react-redux";
import {switchCheckbox} from "../actions/document";

const switchCheckboxWrapper = (switchCheckbox, id) => () => switchCheckbox(id);

const Overlay = (
  <Tooltip id="tooltip">
    Click to CHECK
  </Tooltip>
);

const MyCheckbox = ({editingLocked, switchCheckbox, checkboxes, id, ...props}) => (
  <OverlayTrigger placement="top" overlay={Overlay}>
    <Checkbox
      disabled={editingLocked}
      checked={checkboxes[id].checked}
      onChange={switchCheckboxWrapper(switchCheckbox, id)}
      {...props}
    />
  </OverlayTrigger>
);

export default connect(({document: {checkboxes, editingLocked}}) => ({
  checkboxes,
  editingLocked
}), {switchCheckbox})(MyCheckbox);