import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Homepage from "./components/Homepage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>MOMF</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Homepage />
      </div>
    );
  }
}

export default App;
