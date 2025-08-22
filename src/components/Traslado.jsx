import React, { useState } from 'react';

const mockData = [
  { id: 1, origen: 'Central', llegada: 'Secundario', fecha: '2025-08-01' },
  { id: 2, origen: 'Norte', llegada: 'Central', fecha: '2025-08-02' },
  { id: 3, origen: 'Este', llegada: 'Oeste', fecha: '2025-08-03' },
  // ...más datos de ejemplo
];

const Traslado = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const filtered = mockData.filter(
    item =>
      item.origen.toLowerCase().includes(search.toLowerCase()) ||
      item.llegada.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container my-4">
      <div className="card shadow rounded-4">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center rounded-top-4">
          <h4 className="mb-0">Listado de Traslados</h4>
          <button className="btn btn-light btn-sm rounded-pill" onClick={handlePrint}>
            <i className="bi bi-printer me-1"></i> Imprimir
          </button>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Buscar por depósito..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered table-hover rounded-3 overflow-hidden">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Depósito Origen</th>
                  <th>Depósito Llegada</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center">No se encontraron traslados.</td>
                  </tr>
                ) : (
                  paginated.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.origen}</td>
                      <td>{item.llegada}</td>
                      <td>{item.fecha}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <nav className="d-flex justify-content-center mt-3">
            <ul className="pagination pagination-sm mb-0">
              <li className={`page-item${page === 1 ? ' disabled' : ''}`}>
                <button className="page-link" onClick={() => setPage(page - 1)}>&laquo;</button>
              </li>
              {[...Array(totalPages)].map((_, i) => (
                <li key={i} className={`page-item${page === i + 1 ? ' active' : ''}`}>
                  <button className="page-link" onClick={() => setPage(i + 1)}>{i + 1}</button>
                </li>
              ))}
              <li className={`page-item${page === totalPages ? ' disabled' : ''}`}>
                <button className="page-link" onClick={() => setPage(page + 1)}>&raquo;</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Traslado;
