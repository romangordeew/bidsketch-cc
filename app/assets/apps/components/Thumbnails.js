import React from 'react';
import PageIcon from "./PageIcon";
import {times} from "lodash";
import {NuMBER_OF_PAGES} from "../utils/const";

const renderPageIcon = (i) => (
  <PageIcon
    key={i}
    i={i}
  />
);

const Thumbnails = () => (
  <div className="thumbnails">
    {times(NuMBER_OF_PAGES).map(renderPageIcon)}
  </div>
);

export default Thumbnails;