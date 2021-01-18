import React from "react";

function Form() {
  function checkPassword(event) {
    event.target.value.length < 5
      ? (document.getElementById("passMessage").innerHTML =
          "Password needs to be greater than 5 characters!")
      : (document.getElementById("passMessage").innerHTML = "");
  }

  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <font id="passMessage" color="red"></font>
      <input onChange={checkPassword} type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default Form;
