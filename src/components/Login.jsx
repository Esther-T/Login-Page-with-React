import React from "react";
import Input from "./Input.jsx";

function Login() {
  const [isMousedOver, setMouseOver] = React.useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <button
        type="submit"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
      >
        Login
      </button>
    </form>
  );
}

export default Login;
