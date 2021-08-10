import React, { Component } from "react";
import Header from "./components/Header";
import Movies from "./components/Movie/Movies";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Movies />
        </div>
      </div>
    );
  }
}
