import React from "react";
import Login from "./Login.jsx";
import Form from "./Form.jsx";

var isLoggedIn = false; // check if user is logged in
var userIsRegistered = true; // if user is registered

function App() {
  const [currTime, newTime] = React.useState(new Date().toLocaleTimeString());

  setInterval(getTime, 1000);

  function getTime() {
    newTime(new Date().toLocaleTimeString());
  }
  return (
    <div className="container">
      <h2>{currTime}</h2>
      {!userIsRegistered ? <Form /> : isLoggedIn ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
