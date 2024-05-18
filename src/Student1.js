import React from "react";

function Student1({ std }) {
  return (
    <div>
      <h1>
        I am {std.name} and I am {std.age} years old.
      </h1>
    </div>
  );
}

export default Student1;
