import React from "react";
import Login from "./Login.jsx";
import Form from "./Form.jsx";

var isLoggedIn = false;
var userIsRegistered = false;

var currentTime = new Date().getHours();
console.log(currentTime);
function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Form /> : isLoggedIn ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
