import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top bg-secondary text-white">
      <div className="text-white col-md-4 d-flex align-items-center">
        <Link
          to="/"
          className="text-white mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
          <svg className="bi" width="30" height="24"></svg>
        </Link>
        <span className="text-muted text-white">© 2024 Hunger, Inc</span>
      </div>

      <ul className="text-white nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3 text-white">
          <Link className="text-muted" to="#">
            <svg className="bi" width="24" height="24"></svg>
          </Link>
        </li>
        <li className="ms-3 text-white">
          <Link className="text-muted" to="#">
            <svg className="bi" width="24" height="24"></svg>
          </Link>
        </li>
        <li className="ms-3 text-white">
          <Link className="text-muted" to="#">
            <svg className="bi" width="24" height="24"></svg>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
