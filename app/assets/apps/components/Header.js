import React from 'react';
import {connect} from "react-redux";
import {start} from '../actions/document';
import {ProgressBar} from "react-bootstrap";
import calculateProgress from "../utils/calculateProgress";

const Header = ({checkboxes, flowStarted, start}) => (
  <div>
    Review & Complete document
    {!flowStarted && <button onClick={start}>Click to Start</button>}
    {flowStarted && <ProgressBar now={calculateProgress(checkboxes)} />}
  </div>
);

export default connect(({document: {flowStarted, checkboxes}}) => ({checkboxes, flowStarted}), {start})(Header);