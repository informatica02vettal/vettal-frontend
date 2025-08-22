import React from 'react';

const Header = () => (
  <header className="bg-primary text-white p-3 mb-4 shadow-sm">
    <div className="container d-flex justify-content-between align-items-center">
      <h1 className="mb-0">Vettal Frontend</h1>
      <button className="btn btn-outline-light rounded-pill" onClick={() => alert('Sesión cerrada')}>Cerrar sesión</button>
    </div>
  </header>
);

export default Header;
