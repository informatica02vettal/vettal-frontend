import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Sidebar() {
  return (
    <div
      className="sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "280px" }}
    >
      {/* Logo y título */}
      <NavLink
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <i className="bi bi-bootstrap-fill pe-none me-2" style={{ fontSize: "1.5rem" }}></i>
        <span className="fs-4">Sidebar</span>
      </NavLink>

      <hr />

      {/* Menú principal */}
      <ul className="nav nav-pills flex-column mb-auto sidebar-sticky">
        <li className="nav-item">
          <NavLink to="/" end className="nav-link text-white">
            <i className="bi bi-house pe-none me-2"></i>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className="nav-link text-white">
            <i className="bi bi-speedometer2 pe-none me-2"></i>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" className="nav-link text-white">
            <i className="bi bi-table pe-none me-2"></i>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="nav-link text-white">
            <i className="bi bi-grid pe-none me-2"></i>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/customers" className="nav-link text-white">
            <i className="bi bi-people-circle pe-none me-2"></i>
            Customers
          </NavLink>
        </li>
      </ul>

      <hr />

      {/* Dropdown usuario */}
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
