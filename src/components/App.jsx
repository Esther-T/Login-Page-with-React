import React from "react";
import Login from "./Login.jsx";

var isLoggedIn = false;
var currentTime = new Date().getHours();
console.log(currentTime);
function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {currentTime > 24 ? <h3>Why are you still working?</h3> : null}
    </div>
  );
}

export default App;
