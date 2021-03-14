import React, { Component } from "react";
import './App.css';
import MyApp from "./about";
import AgeCalculator from "./calculator"

export default class App extends Component {
  render() {
    return (
      <div>
        <MyApp />
        <div>
          <AgeCalculator />
        </div>
      </div>
    );
  }
}
