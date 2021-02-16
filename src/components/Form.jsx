import React from "react";

function Form() {
  function checkPassword(event) {
    var passMessage = document.getElementById("passMessage");
    event.target.value.length <= 5
      ? (passMessage.innerHTML =
          "Password needs to be greater than 5 characters!")
      : (passMessage.innerHTML = "");
  }

  function confPassword(event) {
    console.log(event.target.value);
  }

  return (
    <form className="form">
      <input type="text" placeholder="Username" required />
      <font id="passMessage" color="red"></font>
      <input
        onChange={checkPassword}
        name="password"
        id="originalPassword"
        type="password"
        placeholder="Password"
        required
      />
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        onChange={confPassword}
        placeholder="Confirm Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Form;
