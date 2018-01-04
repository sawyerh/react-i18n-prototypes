import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header locale="es" />
        <Footer locale="es" />
      </div>
    );
  }
}

export default App;
