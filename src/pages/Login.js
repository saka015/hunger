import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const onChange = (e) => [
    setCredentials({ ...credentials, [e.target.name]: e.target.value }),
  ];

  const handleSubmit = async (e) => {
    e.preventDefault(); //synthetic event
    console.log(
      JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      })
    );
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Check your credentials or Pls Register if not done yet...");
    }

    if (json.success) {

      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate("/");
    }
  };
  return (
    <>
      <div className="container mt-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              onChange={onChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              name="email"
              value={credentials.email}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              onChange={onChange}
              className="form-control "
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={credentials.password}
            />
          </div>

          <button type="submit" className="btn btn-success m-3">
            Login
          </button>
          <Link to="/createuser">
            <button className="m-3 btn btn-primary small">Register Now!</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
