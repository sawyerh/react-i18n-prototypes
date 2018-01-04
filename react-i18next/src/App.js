import React, { Component } from "react";
import { Header, Footer } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <Header initialLanguage="es" />
        <Footer initialLanguage="es" />
      </div>
    );
  }
}

export default App;
