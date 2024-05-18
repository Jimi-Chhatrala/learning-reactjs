import React, { useState } from "react";

function USComponent() {
  const [name, setName] = useState("Jimi");
  let changeState = () => {
    setName("Kumar");
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeState}>Update</button>
    </div>
  );
}

export default USComponent;

// import React, { useState } from "react";

// function USComponent() {
//   const myArray = useState("Jimi");
//   let changeState = () => {
//     myArray[1]("Jimi Kumar");
//   };

//   return (
//     <div>
//       <h1>{myArray[0]}</h1>
//       <button onClick={changeState}>Update</button>
//     </div>
//   );
// }

// export default USComponent;

// import React, { useState } from "react";

// function USComponent() {
//   const myArray = useState("Jimi");
//   return (
//     <div>
//       <h1>{myArray[0]}</h1>
//       <button onClick={() => myArray[1]("Kumar")}>Update</button>
//     </div>
//   );
// }

// export default USComponent;
