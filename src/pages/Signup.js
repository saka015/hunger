import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const onChange = (e) => [
    setCredentials({ ...credentials, [e.target.name]: e.target.value }),
  ];

  const handleSubmit = async (e) => {
    e.preventDefault(); //synthetic event
    console.log(
      JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      })
    );
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials!");
    }
  };

  const gotRegistered = () => {
    alert("Registration Succesfull! Pls Login...");
  };
  return (
    <>
      <div className="container mt-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label htmlFor="name" className="mt-3">
              Name
            </label>
            <input
              type="text"
              onChange={onChange}
              name="name"
              placeholder="Enter your name"
              value={credentials.name}
              className="form-control"
            />
          </div>
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
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Address</label>
            <input
              type="text"
              onChange={onChange}
              className="form-control "
              placeholder="Address"
              name="geolocation"
              value={credentials.geolocation}
            />
          </div>

          <button
            type="submit"
            className="btn btn-success m-3"
            onClick={gotRegistered}
          >
            Submit
          </button>
          <Link to="/login">
            <button className="m-3 btn btn-danger small">
              Already a user?
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
