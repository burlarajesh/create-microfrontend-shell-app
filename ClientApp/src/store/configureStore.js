import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
export const history = createBrowserHistory({ basename: baseUrl });

export default function configureStore(preloadedState) {
  const middleware = [thunk, routerMiddleware(history)]; // for dispatching history actions

  // In development, use the browser's Redux dev tools extension if installed
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
}
