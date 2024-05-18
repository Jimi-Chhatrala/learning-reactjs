import logo from "./logo.svg";
import "./App.css";

let name = "Jimikumar Chhatrala";
const carObj = {
  name: "Maruti Suzuki",
  color: "White",
  mfg: "2008",
};
var a = 10;
var msg;
if (a > 50) {
  msg = "Hello";
} else {
  msg = "Bye";
}

function User() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{msg}</h1>
        <h1>{a > 50 ? "Hello Kumar" : "Bye Kumar"}</h1>
        <h6>
          {carObj.mfg},{carObj.name},{carObj.color}
        </h6>
        <h5>{name}</h5>
        <h4>{5 + 5}</h4>
        <h1>Hello User</h1>
      </header>
    </div>
  );
}

export default User;
