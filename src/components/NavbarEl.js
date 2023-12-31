import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal.js";
import Cart from "../pages/Cart.js";
import { useCart } from "./ContextReducers";

const NavbarEL = () => {
  let data = useCart();
  const [cartView, setCartView] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-color navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3 mb-2  fsc-italic bold" to="/">
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
              <Link className="nav-link active " aria-current="page" to="/">
                Home
              </Link>
            </li>

            {localStorage.getItem("authToken") ? (
              <li className="nav-item">
                <Link
                  className="nav-link active "
                  aria-current="page"
                  to="/myOrder"
                >
                  My Orders
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>

          {!localStorage.getItem("authToken") ? (
            <div className="d-flex">
              <Link className="btn bg-wshite text-color mx-1" to="/login">
                Login
              </Link>
              <Link className="btn bg-wshite text-color mx-1" to="/createuser">
                Signup
              </Link>
            </div>
          ) : (
            <div>
              <div
                className="btn bg-wshite text-color mx-2 bold"
                onClick={() => {
                  setCartView(true);
                }}
              >
                My Cart
                <Badge pill bg="danger mx-2">
                  {!data.length == 0 ? data.length : ""}
                </Badge>
              </div>
              {cartView ? (
                <Modal onClose={() => setCartView(false)}>
                  <Cart />
                </Modal>
              ) : null}

              <div
                className="btn bg-white text-danger mx-2 bold"
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarEL;
