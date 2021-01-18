import React from "react";

function Form() {
  function checkPassword(event) {
    event.target.value.length < 5
      ? console.log("password too short")
      : console.log("password allowed");
  }

  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input onChange={checkPassword} type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default Form;
