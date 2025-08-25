import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Sidebar() {
  return (
    <aside
      className="sidebar d-flex flex-column flex-shrink-0 p-3 border-end bg-body text-body"
      style={{ width: "280px" }}
    >
      {/* Logo y título */}
      <NavLink
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
      >
        <i className="fa-solid fa-layer-group me-2" style={{ fontSize: "1.5rem" }}></i>
        <span className="fs-4">Sidebar</span>
      </NavLink>

      <hr />

      {/* Menú principal */}
      <ul className="nav nav-pills flex-column mb-auto sidebar-sticky">
        <li className="nav-item">
          <NavLink to="/" end className="nav-link">
            <i className="fa-solid fa-house me-2"></i>
            Home
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
