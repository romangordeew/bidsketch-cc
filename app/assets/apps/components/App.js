import React from 'react';
import Header from "./Header";
import Thumbnails from "./Thumbnails";
import DocumentForm from "./DocumentForm";

const App = () => (
  <div className="allcontent">
    <Header/>
    <div className="main">
      <Thumbnails/>
      <DocumentForm/>
    </div>
  </div>
);

export default App;