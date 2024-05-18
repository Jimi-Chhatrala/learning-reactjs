import React from "react";
import Student1 from "./Student1";

function Students() {
  // const students = ["Jimi", "Kumar", "Prem", "Zain"];
  // let studentNames = students.map((std, index) => <li key={index}>{std}</li>);
  // const numbers = [8, 9, 6, 5, 4, 7, 1, 2, 3];
  // const result = numbers.map((num) => <h1>{(num = num * 2)}</h1>);

  const students = [
    {
      id: 1,
      name: "Jimi",
      age: 23,
    },
    {
      id: 2,
      name: "Kumar",
      age: 25,
    },
    {
      id: 3,
      name: "Prem",
      age: 27,
    },
  ];

  return (
    <div>
      {students.map((std) => (
        <Student1 key={std.id} std={std} />
      ))}
      {/* {<ul>{studentNames}</ul>} */}
      {/* {students.map((std) => (
        <Student1 std={std} />
      ))} */}
      {/* {students.map((std) => (
        <h1>{std}</h1>
      ))} */}
      {/* {numbers.map((num) => (
        <h1>{(num = num * 2)}</h1>
      ))} */}
      {/* {result} */}
    </div>
  );
}

export default Students;
