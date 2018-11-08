import React from 'react';
import {connect} from "react-redux";
import {start} from '../actions/document';
import {ProgressBar} from "react-bootstrap";
import calculateProgress from "../utils/calculateProgress";
import calculateSum from "../utils/calculateSum";
import SaveAndFinish from "./SaveAndFinish";

const Header = ({checkboxes, flowStarted, start}) => {
  const finished = checkboxes.length === calculateSum(checkboxes);
  return (
    <div>
      Review & Complete document
      {!flowStarted && <button onClick={start}>Click to Start</button>}
      {flowStarted && <ProgressBar now={calculateProgress(checkboxes)}/>}
      {finished && <SaveAndFinish/>}
    </div>
  );
};

export default connect(({document: {flowStarted, checkboxes}}) => ({checkboxes, flowStarted}), {start})(Header);