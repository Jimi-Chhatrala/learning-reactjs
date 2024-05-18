import React, { Component } from "react";
import "./CSSstylesheet.css";

export default class CSSstylesheet extends Component {
  render() {
    let x = this.props.check ? "myFont" : "myFont2";
    return (
      <div>
        {/* <h1 className="myFont myFont2">Hello World</h1> */}
        <h1 className={`${x} myFont3`}>Hello World</h1>
      </div>
    );
  }
}
