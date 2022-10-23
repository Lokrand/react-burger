/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./services/reducers/index.js";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";

const root = ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <HashRouter>
      <Router>
        <Route path="/" children={<App />}></Route>
      </Router>
    </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);

reportWebVitals();
