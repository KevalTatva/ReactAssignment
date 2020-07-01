import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");

var UserJson = {
  UserDetail: [
    { UserName: "John", Password: "Doe" },
    { UserName: "Anna", Password: "Smith" },
    { UserName: "Peter", Password: "Jones" }
  ]
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
