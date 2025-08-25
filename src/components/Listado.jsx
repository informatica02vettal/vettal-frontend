import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Listado.css';

const ListadoTraslados = () => {
  const [busqueda, setBusqueda] = useState('');

  const traslados = [
    { id: 1, fecha: '2025-08-20', origen: 'Almacén Central', destino: 'Sucursal Norte', estado: 'Procesado', total: 1500.50 },
    { id: 2, fecha: '2025-08-21', origen: 'Sucursal Este', destino: 'Sucursal Oeste', estado: 'Procesado', total: 750.00 },
    { id: 3, fecha: '2025-08-22', origen: 'Depósito 1', destino: 'Sucursal Sur', estado: 'Procesado', total: 980.75 },
  ];

  const navigate = useNavigate();
  const filtrados = traslados.filter(t =>
    Object.values(t).some(val =>
      String(val).toLowerCase().includes(busqueda.toLowerCase())
    )
  );

  const handleAdd = () => {
    navigate('/añadir-traslado');
  };

  const handleView = (id) => {
    alert(`Ver detalles del traslado con ID: ${id}`);
  };

  return (
    <main className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h5 m-0">Listado de traslados</h1>
        <button
          onClick={handleAdd}
          className="btn btn-primary btn-sm d-flex align-items-center"
        >
          <i className="fa-solid fa-plus"></i>
          <span>Añadir</span>
        </button>
      </div>

      <div className="mb-3" style={{ maxWidth: '250px' }}>
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm align-middle">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Estado</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.length > 0 ? (
              filtrados.map((t) => (
                <tr key={t.id}>
                  <td>{t.fecha}</td>
                  <td>{t.origen}</td>
                  <td>{t.destino}</td>
                  <td>
                    <span className="badge bg-success">{t.estado}</span>
                  </td>
                  <td>${t.total.toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-outline-info btn-sm btn-icon"
                        title="Ver detalles"
                        onClick={() => handleView(t.id)}
                      >
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </td>
                  </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No hay resultados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ListadoTraslados;
