import React, { useState } from "react";

function ControlledFunction() {
  const [name, setName] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    alert(e.target[0].value);
  };

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <h1>{name}</h1>
        <label htmlFor="">Enter Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value.toUpperCase().substring(0, 10).replace("&", "-")
            )
          }
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ControlledFunction;
