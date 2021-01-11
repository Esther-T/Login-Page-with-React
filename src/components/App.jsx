import React from "react";
import Login from "./Login.jsx";
import Form from "./Form.jsx";

var isLoggedIn = false; // check if user is logged in
var userIsRegistered = true; // if user is registered

var currentTime = new Date().getHours();
console.log(currentTime);
function App() {
  const [currTime, newTime] = React.useState(new Date().getTime());

  function getTime() {
    newTime(new Date().getTime());
  }
  return (
    <div className="container">
      <h2>{currTime}</h2>
      <button onClick={getTime}>Get Time</button>
      {!userIsRegistered ? <Form /> : isLoggedIn ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
