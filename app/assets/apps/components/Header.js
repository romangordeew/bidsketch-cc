import React from 'react';
import {connect} from "react-redux";
import {start} from '../actions/document';
import {ProgressBar} from "react-bootstrap";
import calculateProgress from "../utils/calculateProgress";
import calculateSum from "../utils/calculateSum";
import SaveAndFinish from "./SaveAndFinish";

const Header = ({checkboxes, flowStarted, start}) => {
  const sum = calculateSum(checkboxes);
  const finished = checkboxes.length === sum;
  return (
    <div className="header">
      <div className="headerTop">
        <p className="headerTop__text">Review & Complete document</p>
        {!flowStarted && <button className="headerTop__btn headerTop__btn_start" onClick={start}>Click to Start</button>}
        {finished && <SaveAndFinish/>}
      </div>
      {flowStarted && <ProgressBar now={calculateProgress(checkboxes)}/>}
      <p className="progress-step" style={{left: `${calculateProgress(checkboxes)}%`, transform: `translateX(-${calculateProgress(checkboxes)}%)`}}>{flowStarted && `${sum}/${checkboxes.length}`}</p>
    </div>
  );
};

export default connect(({document: {flowStarted, checkboxes}}) => ({checkboxes, flowStarted}), {start})(Header);