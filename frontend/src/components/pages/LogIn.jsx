import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../LoginValidation";
import axios from "axios";
import "./SignUp.css";

function LogIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/");
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="sign__up_in__portal">
      <div className="background">
        <h2>Sign-In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="container">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="email"
            />
            {errors.email && (
              <span className="email__error"> {errors.email}</span>
            )}
          </div>
          <div className="container">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              className="password"
            />
            {errors.password && (
              <span className="password__error"> {errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn__submit">
            <strong>Sign In</strong>
          </button>
          <p className="TnC">
            By signing up you agree to our Terms and Conditions
          </p>
          <p className="Create__Acc">
            Don't have an account? Create one instead:
          </p>
          <Link to="/signup" className="btn__sign__up_in">
            <strong>Create Account</strong>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
