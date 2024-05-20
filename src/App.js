import "./App.css";
import Component1 from "./Component1";
import Component2 from "./Component2";
import CSSstylesheet from "./CSSstylesheet";
import Stylesheet1 from "./Stylesheet1";
import Stylesheet2 from "./Stylesheet2";
import BsComponent from "./BsComponent";
import USComponent from "./USComponent";
import USWithObject from "./USWithObject";
import USWithArray from "./USWithArray";
import ClassState from "./ClassState";
import FunctionState from "./FunctionState";
import ClassEffects from "./ClassEffects";
import FunctionEffect from "./FunctionEffect";
import CompA from "./CompA";
import ControlledForm from "./ControlledForm";
import ControlledFunction from "./ControlledFunction";
import MultipleInputs from "./MultipleInputs";
import FunctionInputs from "./FunctionInputs";
import OtherInputs from "./OtherInputs";
import StateCity from "./StateCity";
import MultipleChecks from "./MultipleChecks";
import RefComponent from "./RefComponent";
import UnControlled from "./UnControlled";
import CallbackRefComp from "./CallbackRefComp";
import HookuseRef from "./HookuseRef";
import HookUseRef2 from "./HookUseRef2";
// import Comp1 from "./Comp1";
// import Comp2 from "./Comp2";

import React, { Suspense, lazy, createContext, useState } from "react";
import Validation from "./Validation";
import FormikForm from "./FormikForm";
import FormikForm2 from "./FormikForm2";
import ReactBS from "./ReactBS";
import GridBS from "./GridBS";
import ImagesDemo from "./ImagesDemo";
import CardsBS from "./CardsBS";
import MyNavbar from "./MyNavbar";

const Comp1 = lazy(() => import("./Comp1"));
const Comp2 = lazy(() => import("./Comp2"));

export const NameContext = createContext();
export const ChannelContext = createContext();

function App() {
  // const name = "Jimi";
  // if (name === "Jimi") {
  //   return <Component1 />;
  // } else {
  //   return <Component2 />;
  // }

  // const name = "Jimi";
  // let data;
  // if (name === "Jimi") {
  //   data = <Component1 />;
  // } else {
  //   data = <Component2 />;
  // }

  // const name = "Jimi";
  // const age = 22;

  // const [name, setName] = useState("Kumar");

  return (
    <div>
      <MyNavbar />
      {/* <CardsBS /> */}
      {/* <ImagesDemo /> */}
      {/* <GridBS /> */}
      {/* <ReactBS /> */}
      {/* <FormikForm2 /> */}
      {/* <FormikForm /> */}
      {/* <Validation /> */}
      {/* <h1>Lazy Loading Demo</h1>
      <Suspense fallback={<div>LOADING... Comp 1</div>}>
        <Comp1 />
      </Suspense>
      <Suspense fallback={<div>LOADING... Comp 2</div>}>
        <Comp2 />
      </Suspense> */}
      {/* <HookUseRef2 /> */}
      {/* <HookuseRef /> */}
      {/* <CallbackRefComp /> */}
      {/* <UnControlled /> */}
      {/* <RefComponent /> */}
      {/* <MultipleChecks /> */}
      {/* <StateCity /> */}
      {/* <OtherInputs /> */}
      {/* <FunctionInputs /> */}
      {/* <MultipleInputs /> */}
      {/* <ControlledFunction /> */}
      {/* <ControlledForm /> */}
      {/* <NameContext.Provider value={"Jimi"}> */}
      {/* <NameContext.Provider value={name}>
        <ChannelContext.Provider value={"Hello World"}>
          <CompA />
        </ChannelContext.Provider>
      </NameContext.Provider> */}
      {/* <FunctionEffect /> */}
      {/* <ClassEffects /> */}
      {/* <FunctionState /> */}
      {/* <ClassState /> */}
      {/* <USWithArray /> */}
      {/* <USWithObject /> */}
      {/* <USComponent /> */}
      {/* <BsComponent /> */}
      {/* <Stylesheet1 /> */}
      {/* <Stylesheet2 /> */}
      {/* <CSSstylesheet check={true} /> */}
      {/* {name == "Jimi" ? <Component1 /> : <Component2 />} */}
      {/* {age > 18 ? <h1>You can vote</h1> : <h1>You cannot vote</h1>} */}
      {/* {name == "Jimi" && <h1>Hello Jimi</h1>} */}
      {/* {data} */}
    </div>
  );
}

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// // import React from "react";
// import React, { Component } from "react";

// // import Header from "./Header";
// // import Sidebar from "./Sidebar";
// // import Footer from "./Footer";
// // import PropTypes from "prop-types";

// // class App extends React.Component {
// export default class App extends Component {
//   render() {
//     return (
//       <>
//         <h1>Jimi</h1>
//         <h2>Chhatrala</h2>
//       </>
//     );
//   }
// }

// // function App() {
// //   return (
// //     <>
// //       <App2 />
// //       <h1>Learning Never Ends</h1>
// //     </>
// //   );
// // }

// export function App2() {
//   return <h1>Kumar</h1>;
// }

// // function App(props) {
// //   return (
// //     <div>
// //       <h1>Hey {props.name}</h1>
// //       <h1>Hey {props.age}</h1>
// //       <h1>Hey {props.isMarried.toString()}</h1>
// //       <h1>Hey {String(props.isMarried)}</h1>
// //       <h1>Hey {props.arr}</h1>
// //       <h1>Hey {props.arr[1]}</h1>
// //       {/* <Header />
// //       <Sidebar />
// //       <Footer /> */}
// //     </div>
// //   );
// // }

// // const App = () => <h1>Hello World</h1>;

// // const App = (props) => {
// //   return (
// //     <>
// //       <h1>{props.name}</h1>
// //       <h2>{props.age}</h2>
// //     </>
// //   );
// // };

// // const App = (props) => {
// //   <>
// //     <h1>{props.name}</h1>
// //     <App2 name="Adil" age={23} />
// //   </>;
// // };
// // const App2 = (props) => <h3>{props.name}</h3>;

// // App.propTypes = {
// //   name: PropTypes.string.isRequired,
// //   age: PropTypes.number,
// //   isMarried: PropTypes.bool,
// //   arr: PropTypes.array,
// // };

// // App.defaultProps = {
// //   name: "Someone",
// //   age: 18,
// // };

// // export default App;
// // export { App2 };
