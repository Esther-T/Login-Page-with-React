import React from "react";
import Login from "./Login.jsx";
import Form from "./Form.jsx";
import { useState } from "react";

var isLoggedIn = false; // check if user is logged in
var userIsRegistered = false; // if user is registered

function App() {
  const [currTime, newTime] = useState(new Date().toLocaleTimeString());
  const [password, setpassword] = useState("");

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
