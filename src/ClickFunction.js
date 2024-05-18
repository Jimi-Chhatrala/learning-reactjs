import React, { Component } from "react";
import "./App.css";

export default class ClickFunction extends Component {
  render() {
    const HelloFunction = (name) => {
      alert("Hello Arrow Function in Class Component : " + name);
    };

    return (
      <div className="App">
        <input
          type="button"
          value="Click"
          // onClick={() => HelloFunction("Zain")}
          onClick={() => HelloFunction(this.props.name)}
        />
      </div>
    );
  }
}

// import React from "react";
// import "./App.css";

// function ClickFunction(props) {
//   const HelloFunction = (name) => {
//     alert("Hello Arrow Function in Functional Component : " + name);
//   };

//   return (
//     <div className="App">
//       <input
//         type="button"
//         value="Click"
//         // onClick={() => HelloFunction("Jimi")}
//         onClick={() => HelloFunction(props.name)}
//       />
//     </div>
//   );
// }

// export default ClickFunction;

// import React, { Component } from "react";
// import "./App.css";

// export default class ClickFunction extends Component {
//   HelloFunction() {
//     alert("Hello Class");
//   }

//   render() {
//     return (
//       <div className="App">
//         <input type="button" value="Click" onClick={this.HelloFunction} />
//       </div>
//     );
//   }
// }

// import React from "react";
// import "./App.css";

// function ClickFunction() {
//   function HelloFunction() {
//     alert("Hello Function");
//   }
//   return (
//     <div className="App">
//       <input type="button" value="Click" onClick={HelloFunction} />
//     </div>
//   );
// }

// export default ClickFunction;
