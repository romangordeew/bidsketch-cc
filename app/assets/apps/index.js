// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import reducer from './reducers';
import {Provider} from "react-redux";
import App from "./components/App";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  )
});