import React from 'react';
import {connect} from "react-redux";
import {switchCheckbox} from "../actions/document";

const switchCheckboxWrapper = (switchCheckbox, id) => () => switchCheckbox(id);

const MyCheckbox = ({editingLocked, switchCheckbox, checkboxes, id, ...props}) => (
  <div className="documentFormCheckboxWrapper">
    <label className="documentFormCheckbox">
      <input
        {...props}
        type="checkbox"
        disabled={editingLocked}
        checked={checkboxes[id].checked}
        onChange={switchCheckboxWrapper(switchCheckbox, id)}
      />
      <span/>
    </label>

    <div className="checkboxTooltip">
        Click to CHECK
    </div>
  </div>

);

export default connect(({document: {checkboxes, editingLocked}}) => ({
  checkboxes,
  editingLocked
}), {switchCheckbox})(MyCheckbox);