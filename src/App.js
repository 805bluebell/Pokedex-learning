import React, { Component } from "react";
import brandIcon from "./brandIcon.svg";
import "./App.css";
import CenterStage from "./CenterStage.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="outer-yellow-area">
        <img className="brand-icon" src={brandIcon} alt="logo" />
        <CenterStage />
      </div>
    );
  }
}

export default App;
