import React, { useState } from "react";

function FunctionInputs() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;

    const new_value =
      name === "email" ? value.toLowerCase().replace("#", "@") : value;
    console.log(e.target);
    setData((prev) => {
      return {
        ...prev,
        [name]: new_value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name: </label>
        <input
          type="text"
          value={data.name}
          onChange={handleChange}
          name="name"
          placeholder="Enter Your Name"
        />
        <br />
        <br />
        <label htmlFor="">Enter Email: </label>
        <input
          type="email"
          value={data.email}
          onChange={handleChange}
          name="email"
          id=""
          placeholder="Enter Your Email"
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default FunctionInputs;
