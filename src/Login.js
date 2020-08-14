import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  //browswer history
  const history = useHistory();

  //keep track of email and password
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //login function
  const login = (e) => {
    e.preventDefault();

    //login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in successfully, reidirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  //register a new user function
  const register = (e) => {
    e.preventDefault();
    //login register

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create a user and logged in., ridrect to homepage
        history.push("/");
        alert("user is created with " + email + ".");
        setEmail("");
        setPassword("");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG13.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice. Need help?
        </p>

        <button onClick={register} className="login__registerButton">
          Create Your Amazon Account{" "}
        </button>
      </div>
    </div>
  );
}

export default Login;
