import React, { Component } from "react";

export default class Student extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor from Student");
  }
  render() {
    return (
      <div>
        <h1>Hello Student : {this.props.name}</h1>
      </div>
    );
  }
}
