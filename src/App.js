import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>MOMF</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Main />
      </div>
    );
  }
}

export default App;
