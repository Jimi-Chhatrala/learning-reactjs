import React, { Component } from "react";

export default class Person1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jimi",
    };
    console.log("Constructor called.");
  }

  changeState = () => {
    this.setState({
      name: "Kumar",
    });
    console.log("Button Clicked");
  };

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps called");
    console.log("state:- ", state);
    console.log("props:- ", props);
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called");
    console.log("next state:- ", nextState);
    console.log("next props:- ", nextProps);

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate called");
    console.log("prev state:- ", prevState);
    console.log("prev props:- ", prevProps);
    return "Hello";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate called");
    console.log("prev state:- ", prevState);
    console.log("prev props:- ", prevProps);
    console.log("snapshot:- ", snapshot);
  }

  render() {
    console.log("Render Called");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}
