import React, { Component } from "react";

import "../styles/App.scss";
import SideMenuComponent from "./SideMenu/SideMenuComponent";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="headTitle">Find Your Course</h1>

        <SideMenuComponent />
      </div>
    );
  }
}

export default App;
