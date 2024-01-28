import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../SignUpValidation";
import axios from "axios";
import "./SignUp.css";

function SignUp() {
  const [values, setValues] = useState({
    name: "",
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
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="background">
      <div className="sign__up_in__portal">
        <h2>Sign-Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="container">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="name"
              placeholder="Enter Full Name"
              name="name"
              onChange={handleInput}
              className="name"
            />
            {errors.name && <span className="name__error"> {errors.name}</span>}
          </div>
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
          <Link to="/" className="TnC">
            By signing up you agree to our Terms and Conditions
          </Link>
          <button type="submit" className="btn__submit">
            <strong>Sign Up</strong>
          </button>
          <p className="Login__Here">
            Already have an account? Log in below instead:
          </p>
          <Link to="/login" className="btn__sign__up_in">
            <strong>Login</strong>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
