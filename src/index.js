import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { compose, createStore } from "redux";
const rootReducer = (state = {}) => state;
console.log(
  "is plugin defined:",
  Boolean(window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"])
);
console.log(
  "non bracket syntax:",
  Boolean(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
);
const composeWithDevTools =
  typeof window !== "undefined" &&
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    : function (...args) {
        if (args.length === 0) return undefined;
        return typeof args[0] === "object"
          ? compose
          : compose(...args);
      };
console.log("creating store");
export const store = createStore(
  rootReducer,
  composeWithDevTools()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
