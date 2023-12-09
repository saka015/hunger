import React from "react";
import { Link,useNavigate } from "react-router-dom";

const NavbarEL = () => {

  const navigate=useNavigate();

  const handleLogout=() => {

    localStorage.removeItem("authToken");
    navigate("/login")


    
  }
  return (
    <nav className="navbar navbar-expand-lg bg-success navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3 mb-2  fsc-italic" to="#">
          Hunger
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 d-flex">
            <li className="nav-item border btn p-0 mx-3">
              <Link className="nav-link active " aria-current="page" to="#">
                Home
              </Link>
            </li>

            {localStorage.getItem("authToken") ? (
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">
                  My Orders
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>

          {!localStorage.getItem("authToken") ? (
            <div className="d-flex">
              <Link className="btn bg-white text-success mx-1" to="/login">
                Login
              </Link>
              <Link className="btn bg-white text-success mx-1" to="/createuser">
                Signup
              </Link>
            </div>
          ) : (
            <div>
              <div className="btn bg-white text-success mx-2">My Cart</div>
              <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>Logout</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarEL;
