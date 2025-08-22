import React, { useState } from 'react';

const TrasladosMasivos = () => {
  const [origen, setOrigen] = useState('');
  const [llegada, setLlegada] = useState('');
  const [excelFile, setExcelFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario y el archivo
    alert(`Depósito de origen: ${origen}\nDepósito de llegada: ${llegada}\nArchivo: ${excelFile ? excelFile.name : 'No cargado'}`);
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card shadow-lg border-0 rounded-4" style={{background: 'rgba(245, 247, 250, 0.95)'}}>
            <div className="card-header bg-primary text-white text-center rounded-top-4">
              <h3 className="mb-0">
                <i className="bi bi-arrow-left-right me-2"></i>
                Traslados
              </h3>
            </div>
            <div className="card-body p-4">
              <form className="row g-4" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label htmlFor="origen" className="form-label">Depósito de Origen</label>
                  <div className="input-group rounded-3 shadow-sm">
                    <span className="input-group-text bg-light border-0 rounded-start-3"><i className="bi bi-box-arrow-in-right"></i></span>
                    <input
                      type="text"
                      className="form-control border-0 rounded-end-3"
                      id="origen"
                      value={origen}
                      onChange={e => setOrigen(e.target.value)}
                      required
                      placeholder="Ej: Depósito Central"
                      style={{background: '#f8fafc'}}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="llegada" className="form-label">Depósito de Llegada</label>
                  <div className="input-group rounded-3 shadow-sm">
                    <span className="input-group-text bg-light border-0 rounded-start-3"><i className="bi bi-box-arrow-in-left"></i></span>
                    <input
                      type="text"
                      className="form-control border-0 rounded-end-3"
                      id="llegada"
                      value={llegada}
                      onChange={e => setLlegada(e.target.value)}
                      required
                      placeholder="Ej: Depósito Secundario"
                      style={{background: '#f8fafc'}}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="excel" className="form-label">Cargar Excel</label>
                  <div className="input-group rounded-3 shadow-sm">
                    <span className="input-group-text bg-light border-0 rounded-start-3"><i className="bi bi-file-earmark-excel"></i></span>
                    <input
                      type="file"
                      className="form-control border-0 rounded-end-3"
                      id="excel"
                      accept=".xlsx,.xls"
                      onChange={e => setExcelFile(e.target.files[0])}
                      required
                      style={{background: '#f8fafc'}}
                    />
                  </div>
                  {excelFile && (
                    <div className="form-text text-success mt-1">
                      Archivo seleccionado: {excelFile.name}
                    </div>
                  )}
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-success px-5 rounded-pill shadow-sm">
                    <i className="bi bi-send me-2"></i>Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrasladosMasivos;
