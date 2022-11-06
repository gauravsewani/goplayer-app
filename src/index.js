import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Redux Setup
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = configureStore(
  {
    reducer: rootReducer,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
