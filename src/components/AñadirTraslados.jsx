import React, { useState, useEffect } from 'react';
import './Listado.css';

const AñadirTraslados = () => {
  const [form, setForm] = useState({
    origen: '',
    destino: '',
    comentarios: ''
  });

  const [nuevoArticulo, setNuevoArticulo] = useState({
    codigo: '',
    cantidad: '',
    nombre: '',
    stockDisponible: ''
  });

  const [articulos, setArticulos] = useState([]);
  const [depositos, setDepositos] = useState([]);
  const [articulosDisponibles, setArticulosDisponibles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDepositos([
        'Almacén Central',
        'Sucursal Norte',
        'Sucursal Sur',
        'Depósito 1',
        'Depósito 2'
      ]);
      setArticulosDisponibles([
        { codigo: 'P001', nombre: 'Producto A', stock: 10 },
        { codigo: 'P002', nombre: 'Producto B', stock: 5 },
        { codigo: 'P003', nombre: 'Producto C', stock: 0 }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleArticuloInput = (e) => {
    const { name, value } = e.target;

    if (name === 'codigo') {
      const articulo = articulosDisponibles.find(a => a.codigo === value);
      setNuevoArticulo({
        codigo: value,
        cantidad: '',
        nombre: articulo ? articulo.nombre : '',
        stockDisponible: articulo ? articulo.stock : ''
      });
    } else {
      setNuevoArticulo({ ...nuevoArticulo, [name]: value });
    }
  };

  const agregarArticulo = () => {
    const { codigo, cantidad, stockDisponible } = nuevoArticulo;

    if (!codigo || !cantidad) {
      alert('Completa el código y la cantidad');
      return;
    }

    const cantidadNum = parseInt(cantidad);
    const stockNum = parseInt(stockDisponible);

    if (isNaN(cantidadNum) || cantidadNum <= 0) {
      alert('La cantidad debe ser un número mayor a cero');
      return;
    }

    if (cantidadNum > stockNum) {
      alert('La cantidad excede el stock disponible');
      return;
    }

    setArticulos([...articulos, {
      codigo,
      cantidad: cantidadNum
    }]);

    setNuevoArticulo({
      codigo: '',
      cantidad: '',
      nombre: '',
      stockDisponible: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Traslado guardado correctamente');
    setForm({ origen: '', destino: '', comentarios: '' });
    setArticulos([]);
  };

  if (loading) {
    return (
      <main className="container py-4">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-2">Cargando datos desde la base de datos...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container py-4">
      <h1 className="h5 mb-4">Registro de Traslado</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        {/* Depósitos */}
        <div className="col-md-6">
          <label className="form-label">Depósito Origen</label>
          <select
            name="origen"
            value={form.origen}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Seleccionar...</option>
            {depositos.map((dep, i) => (
              <option key={i} value={dep}>{dep}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Depósito Destino</label>
          <select
            name="destino"
            value={form.destino}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Seleccionar...</option>
            {depositos.map((dep, i) => (
              <option key={i} value={dep}>{dep}</option>
            ))}
          </select>
        </div>

        {/* Artículos */}
        <div className="col-12">
          <h2 className="h6 mb-3 mt-4">Artículos del traslado</h2>
          <div className="row g-2 mb-3">
            {/* Código con datalist */}
            <div className="col-md-3">
              <input
                list="codigos"
                name="codigo"
                value={nuevoArticulo.codigo}
                onChange={handleArticuloInput}
                className="form-control form-control-sm"
                placeholder="Código"
              />
              <datalist id="codigos">
                {articulosDisponibles.map((art, i) => (
                  <option key={i} value={art.codigo} />
                ))}
              </datalist>
            </div>

            {/* Nombre visual */}
            <div className="col-md-3">
              <input
                type="text"
                value={nuevoArticulo.nombre}
                className="form-control form-control-sm"
                placeholder="Nombre"
                readOnly
              />
            </div>

            {/* Stock disponible */}
            <div className="col-md-2">
              <input
                type="text"
                value={nuevoArticulo.stockDisponible}
                className="form-control form-control-sm"
                placeholder="Stock"
                readOnly
              />
            </div>

            {/* Cantidad a trasladar */}
            <div className="col-md-2">
              <input
                type="number"
                name="cantidad"
                value={nuevoArticulo.cantidad}
                onChange={handleArticuloInput}
                className="form-control form-control-sm"
                placeholder="Cantidad"
              />
            </div>

            {/* Botón agregar */}
            <div className="col-md-2">
              <button
                type="button"
                className="btn btn-success btn-sm w-100"
                onClick={agregarArticulo}
              >
                <i className="fa-solid fa-plus me-1"></i>Agregar
              </button>
            </div>
          </div>

          {/* Tabla de artículos */}
          <div className="table-responsive">
            <table className="table table-striped table-sm align-middle">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {articulos.length > 0 ? (
                  articulos.map((art, index) => (
                    <tr key={index}>
                      <td>{art.codigo}</td>
                      <td>{art.cantidad}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center">No hay artículos añadidos</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Comentarios */}
        <div className="col-12">
          <h2 className="h6 mb-3 mt-4">Comentario</h2>
          <textarea
            name="comentarios"
            value={form.comentarios}
            onChange={handleChange}
            className="form-control"
            rows="3"
          />
        </div>

        {/* Botón final */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary mt-3">
            <i className="fa-solid fa-floppy-disk me-2"></i>Guardar Traslado
          </button>
        </div>
      </form>
    </main>
  );
};

export default AñadirTraslados;
