import React, { useState } from "react";

function USWithObject() {
  const obj = {
    name: "jimi",
    age: 29,
    height: 5.6,
    isYoung: true,
  };

  const [person, setPerson] = useState(obj);

  let changeState = () => {
    setPerson((previousState) => {
      return {
        ...previousState,
        name: "Kumar",
      };
    });

    // setPerson({
    //   name: "Kumar",
    //   age: 53,
    //   height: 5.4,
    //   isYoung: false,
    // });
  };

  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.height}</h1>
      <h1>{person.isYoung.toString()}</h1>
      <button onClick={changeState}>Change</button>
    </div>
  );
}

export default USWithObject;
