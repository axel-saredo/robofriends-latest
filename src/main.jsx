import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import "tachyons";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";

import { searchRobots, requestRobots } from "./reducers";

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
