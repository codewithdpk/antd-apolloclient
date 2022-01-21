import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppProvider } from "./config";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
