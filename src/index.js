import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import New from "./App";
// import New, { App2 } from "./App";
import reportWebVitals from "./reportWebVitals";
import User from "./User";
import HelloMessage from "./HelloMessage";
import House from "./House";
import { MyClass, MyClass2 } from "./MyClass";
import Student from "./Student";
import Employee from "./Employee";
import Customer from "./Customer";
import ClickFunction from "./ClickFunction";
import BindingEvent from "./BindingEvent";
import Mounting1 from "./Mounting1";
import Updating1 from "./Updating1";
import Person1 from "./Person1";
import ParentClass from "./ParentClass";
import ParentComponent from "./ParentComponent";
import NewComponent from "./NewComponent";
import Students from "./Students";
import StyleComponent from "./StyleComponent";
import CSSstylesheet from "./CSSstylesheet";

let a = "Amit";
const root = ReactDOM.createRoot(document.getElementById("root"));

// const friends = ["Amit", "Zain", "Kumar", "Ali"];
root.render(
  <div className="App">
    {/* <StyleComponent /> */}
    {/* <Students /> */}
    {/* <NewComponent /> */}
    <App />
    {/* <ParentComponent /> */}
    {/* <ParentClass /> */}
    {/* <Person1 city="Ahmedabad" /> */}
    {/* <Updating1 /> */}
    {/* <Mounting1 city="Ahmedabad" /> */}
  </div>
  // <BindingEvent />
  // <ClickFunction name="Amit" />
  // <Customer name="Jimi" age={25} />
  // <Employee name="Adil" />
  // {/* <Student name="Jimi" /> */}
  // <React.StrictMode>
  //   <MyClass name="Jimmy" age={23}>
  //     <h2>Child no. 1</h2>
  //   </MyClass>
  //   {/* <New />
  //   <App2 />
  //   <MyClass name="Jimmy" age={23}>
  //     <h2>Child no. 1</h2>
  //   </MyClass>
  //   <MyClass name={a} age={25}>
  //     <button type="button">Submit</button>
  //   </MyClass>
  //   <MyClass name="Hellos" age={78}>
  //     <ol>
  //       <li>Ali</li>
  //       <li>Zain</li>
  //       <li>Roy</li>
  //     </ol>
  //   </MyClass> */}
  //   {/* <App name="Adil" age={23} /> */}
  //   {/* <App2 name="Adil" age={23} /> */}
  //   {/* <App name="Adil" age={23} isMarried={false} arr={friends} /> */}
  //   {/* <House /> */}
  //   {/* <App />
  //   <HelloMessage name="Jimi" age="22">
  //     <p>Children Element 1</p>
  //   </HelloMessage>
  //   <HelloMessage name="Kumar" age="25">
  //     <button type="button" value="Click">
  //       Click
  //     </button>
  //   </HelloMessage>
  //   <HelloMessage name={a} age="23">
  //     <h1>Children Element 2</h1>
  //   </HelloMessage> */}
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
