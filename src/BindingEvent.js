import "../src/index.css";
import React, { Component } from "react";

export default class BindingEvent extends Component {
  constructor() {
    super();

    // this.HandleEvent = this.HandleEvent.bind(this);
    this.state = {
      name: "Jimi",
    };
  }

  HandleEvent() {
    // console.log("this : ", this);
    this.setState({
      name: "Kumar",
    });
  }

  // HandleEvent = () => {
  //   // console.log("this : ", this);
  //   this.setState({
  //     name: "Kumar",
  //   });
  // };

  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <button type="button" onClick={() => this.HandleEvent(this)}>
          Click
        </button>
        {/* <button type="button" onClick={this.HandleEvent}>
          Click
        </button> */}
        {/* <button type="button" onClick={this.HandleEvent.bind(this)}>
          Click
        </button> */}
        {/* <button type="button" onClick={this.HandleEvent}>
          Click
        </button> */}
      </div>
    );
  }
}
