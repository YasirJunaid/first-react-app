import React, { Component } from "react";
import './App.css';

export default class MyApp extends Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <h2>I am Yasir Junaid</h2>
          <img
            src={'./img1.JPG'}
            alt="????"
            className="image"
            width="200px"
            height="250px"
            />
      </div>
    );
  }
}
