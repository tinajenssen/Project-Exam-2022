import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Browse from "../browse/Browse";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState(false);
  const [browse, setBrowse] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("password").replace(/"/g, "");
    let mail = localStorage.getItem("email").replace(/"/g, "");

    if (!email || !password) {
      setLoginError(true);
      console.log("error");
    } else if (password !== pass || email !== mail) {
      setLoginError(true);
    } else {
      setBrowse(!browse);
      setLoginError(false);
    }
  }
  return (
    <div>
      {browse ? (
        <Form onSubmit={handleLogin} className="form__content">
          <div className="form__group">
            <input
              type="email"
              className="form__control"
              placeholder="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form__group">
            <input
              type="password"
              className="form__control"
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button type="submit" className="btn--primary">
            Login
          </button>

          {loginError && (
            <Alert color="primary" variant="warning">
              Fill in correct info, else keep trying.
            </Alert>
          )}
        </Form>
      ) : (
        <Browse />
      )}
    </div>
  );
}

export default LoginForm;
