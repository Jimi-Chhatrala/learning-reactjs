import React, { Component } from "react";

export default class ChildClass extends Component {
  componentWillUnmount() {
    console.log("Child componentWillUnmount called.");
  }

  render() {
    return (
      <div>
        <h1>Hey Jimi Brother</h1>
      </div>
    );
  }
}
