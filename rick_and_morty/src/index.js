import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux/store";
import App from "./App";

const ROOT = ReactDOM.createRoot(document.getElementById("root"))

ROOT.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
</Provider>,
);
