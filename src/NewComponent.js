import React, { Component } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

export default class NewComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jimi",
    };
  }

  render() {
    // const name = "Jimi";
    if (this.state.name === "Jimi") {
      return <Component1 />;
    } else {
      return <Component2 />;
    }
    // return (
    //   <div>

    //   </div>
    // )
  }
}
