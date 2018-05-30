import React, { Component } from "react";
import "./App.css";
import SignUp from "./SignUp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Welcome!</h3>
        </header>
        <SignUp />
      </div>
    );
  }
}

export default App;
