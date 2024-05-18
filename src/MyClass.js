import React, { Component } from "react";
import PropTypes from "prop-types";

export class MyClass extends Component {
  render() {
    return (
      <div>
        <h1>My Class : {this.props.name}</h1>
        <h1>My Class : {this.props.age}</h1>
        {this.props.children}
        <MyClass2 />
      </div>
    );
  }
}

// export default MyClass;

export class MyClass2 extends Component {
  render() {
    return (
      <div>
        <h1>Learning Never Ends</h1>
      </div>
    );
  }
}

MyClass.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

MyClass.defaultProps = {
  name: "Jimikumar",
};
