import React, { Component } from "react";
import { Modal } from "./components/modal/Modal";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="shape" />
        <header className="App-header">
          <div>
            <h1>We're coming soon</h1>
            <p>
              The perfect platform for freelancers, digital nomads, or simply,
              people working with laptops.
            </p>
          </div>
          <Modal />
        </header>
      </div>
    );
  }
}

export default App;
