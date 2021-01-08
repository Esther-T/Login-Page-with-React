import React from "react";
import Login from "./Login.jsx";

var isLoggedIn = false;

function App() {
  if (isLoggedIn === true) return <h1>Hello</h1>;
  else return <Login />;
}

export default App;
