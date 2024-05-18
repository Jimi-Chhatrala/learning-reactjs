import React, { Component } from "react";

export default class ControlledForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // data: "Jimi",
      data: "",
    };
  }

  handleForm = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    this.setState({
      data: e.target.value,
      // data: e.target.value.toLowerCase(),
      // data: e.target.value.toUpperCase(),
      // data: e.target.value.substring(0, 15),
      // data: e.target.value.toLowerCase().substring(0, 15),
    });
  };

  handleFormSubmission = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target[0]);
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    console.log(e.target[0].value.toUpperCase());
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmission}>
          {/* <h1>{this.state.data}</h1> */}
          <label htmlFor="">Enter Name: </label>
          <input
            type="text"
            value={this.state.data}
            onChange={this.handleForm}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
