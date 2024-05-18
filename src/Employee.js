import React, { Component } from "react";

export default class Employee extends Component {
  state = {
    name: "Learning Never Ends",
    // name: this.props.name,
    age: 23,
    surname: "Kumar",
    // name: 1,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // name: "Learning Never Ends",
  //     name: this.props.name,
  //     age: 23,
  //     surname: "Kumar",
  //     // name: 1,
  //   };
  // }
  changeName() {
    this.setState({
      name: "Welcome to our channel",
      age: 33,
      surname: "Jimi",
      // name: this.state.name + 1,
    });
  }
  render() {
    return (
      <div>
        <h1>Hello Employee : {this.state.name}</h1>
        <h1>Hello Employee : {this.state.age}</h1>
        <h1>Hello Employee : {this.state.surname}</h1>
        <input type="button" value="Click" onClick={() => this.changeName()} />
      </div>
    );
  }
}
