import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

const isMobile = window.innerWidth <= 480;
export default isMobile;


ReactDOM.render(<App />, document.getElementById("root"));
