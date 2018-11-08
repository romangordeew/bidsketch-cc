import React from 'react';
import {connect} from "react-redux";
import {lockEditing} from "../actions/document";

const SaveAndFinish = ({lockEditing}) => (
  <button onClick={lockEditing}>Save & finish document</button>
);

export default connect(null, {lockEditing})(SaveAndFinish);