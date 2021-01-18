import React from "react";

function Form() {
  function checkPassword(event) {
    event.target.value.length <= 5
      ? (document.getElementById("passMessage").innerHTML =
          "Password needs to be greater than 5 characters!")
      : (document.getElementById("passMessage").innerHTML = "");
  }

  function confirmPassword(event) {
    const pass = document.getElementById("originalPassword").value;
    event.target.value !== pass
      ? (document.getElementById("passMessage").innerHTML =
          "Password not the same!")
      : (document.getElementById("passMessage").innerHTML = "");
  }

  return (
    <form className="form">
      <input type="text" placeholder="Username" required />
      <font id="passMessage" color="red"></font>
      <input
        onChange={checkPassword}
        id="originalPassword"
        type="password"
        placeholder="Password"
        required
      />
      <input
        type="password"
        id="confirmPassword"
        onChange={confirmPassword}
        placeholder="Confirm Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Form;
