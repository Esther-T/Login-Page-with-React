import React from "react";

function Form(event) {
  function checkPassword() {
    event.target.value < 5
      ? console.log("password too short")
      : console.log("password allowed");
  }

  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" onChanged={checkPassword} placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default Form;
