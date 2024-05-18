import React, { useState } from "react";

function USWithArray() {
  let num = [8, 9, 6, 5];
  const [numbers, setNumbers] = useState(num);

  let changeList = () => {
    setNumbers((previousState) => {
      return [
        ...previousState,
        // 98
        Math.floor(Math.random() * 50),
      ];
    });
  };

  // let changeList = () => {
  //   setNumbers([1, 2, 3, 4]);
  // };

  return (
    <div>
      <ul>
        {numbers.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
      <button onClick={changeList}>Change Array</button>
    </div>
  );
}

export default USWithArray;
