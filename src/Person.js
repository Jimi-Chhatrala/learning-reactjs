import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Person(props) {
  return <h1>{props.name} lives here..</h1>;
}

export default Person;
