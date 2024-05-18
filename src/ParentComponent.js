import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  ParentMethod = (childName, surname) => {
    alert(`Hello From Parent Component Name: ${childName} Surname: ${surname}`);
  };

  render() {
    return (
      <div>
        <ChildComponent callMethod={this.ParentMethod} />
      </div>
    );
  }
}
