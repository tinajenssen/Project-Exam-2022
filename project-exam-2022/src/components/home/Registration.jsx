import React, { useState } from "react";
import Form from "react-bootstrap/Form";
//import Alert from "react-bootstrap/Alert";
import LoginTabs from "./Tabs";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerError, setRegisterError] = useState(false);
  const [register, setRegister] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setRegisterError(true);
    } else {
      setRegisterError(false);
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("password", JSON.stringify(password));
      console.log("Saved in Local Storage");

      setRegister(!register);
    }
  }
  function handleClick() {
    setRegister(!register);
  }

  return (
    <>
      <div>
        {" "}
        {register ? (
          <Form onSubmit={handleFormSubmit} className="form__content">
            <div className="form__group">
              <input
                type="email"
                className="form__control"
                placeholder="enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form__group">
              <input
                type="password"
                className="form__control"
                placeholder="enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <button type="submit" className="btn--primary">
              Register
            </button>

            {registerError && <div className="error">fill in every field!</div>}
          </Form>
        ) : (
          <LoginTabs />
        )}
      </div>
    </>
  );
}

export default RegistrationForm;
