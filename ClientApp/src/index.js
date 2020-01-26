import "../sass/styles.scss";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider, ReactReduxContext } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store/configureStore";
import { App } from "./App";

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
const store = configureStore(initialState);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store} context={ReactReduxContext}>
    <ConnectedRouter
      history={history}
      context={ReactReduxContext}
      store={store}
    >
      <App />
    </ConnectedRouter>
  </Provider>,
  rootElement
);

// Allow Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
