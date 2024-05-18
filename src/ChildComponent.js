import React from "react";

export default function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.callMethod("Jimi", "Kumar")}>
        Click Me to alert with parameters
      </button>
    </div>
  );
}

// import React, { Component } from "react";

// export default class ChildComponent extends Component {
//   render() {
//     return (
//       <div>
//         {/* <button onClick={this.props.callMethod}>Click Me to alert</button> */}
//         <button onClick={() => this.props.callMethod("Jimi", "Kumar")}>
//           Click Me to alert with parameters
//         </button>
//       </div>
//     );
//   }
// }
