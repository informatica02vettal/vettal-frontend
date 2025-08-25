import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // Lee tema guardado o 'auto'
    return localStorage.getItem("theme") || "auto";
  });

  useEffect(() => {
    if (theme === "auto") {
      document.documentElement.removeAttribute("data-bs-theme");
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button
        className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
        id="bd-theme"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i
          className={`bi my-1 ${
            theme === "light"
              ? "bi-sun-fill"
              : theme === "dark"
              ? "bi-moon-stars-fill"
              : "bi-circle-half"
          }`}
        ></i>
        <span className="visually-hidden" id="bd-theme-text">
          Toggle theme
        </span>
      </button>
      <ul
        className="dropdown-menu dropdown-menu-end shadow"
        aria-labelledby="bd-theme-text"
      >
        <li>
          <button
            type="button"
            className={`dropdown-item d-flex align-items-center ${
              theme === "light" ? "active" : ""
            }`}
            onClick={() => setTheme("light")}
          >
            <i className="bi bi-sun-fill me-2 opacity-50"></i>
            Light
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`dropdown-item d-flex align-items-center ${
              theme === "dark" ? "active" : ""
            }`}
            onClick={() => setTheme("dark")}
          >
            <i className="bi bi-moon-stars-fill me-2 opacity-50"></i>
            Dark
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`dropdown-item d-flex align-items-center ${
              theme === "auto" ? "active" : ""
            }`}
            onClick={() => setTheme("auto")}
          >
            <i className="bi bi-circle-half me-2 opacity-50"></i>
            Auto
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ThemeToggle;