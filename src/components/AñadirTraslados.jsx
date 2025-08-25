import React, { useState, useEffect } from 'react';
import './Listado.css';

const AñadirTraslados = () => {
  const [form, setForm] = useState({
    origen: '',
    destino: '',
    comentarios: ''
  });

  const [articulos, setArticulos] = useState([]);
  const [depositos, setDepositos] = useState([]);
  const [articulosDisponibles, setArticulosDisponibles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [seleccionado, setSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState('');

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

  const truncarTexto = (texto, maxLength) => {
    return texto.length > maxLength ? texto.slice(0, maxLength) + '...' : texto;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const abrirModal = () => {
    setModalVisible(true);
    setBusqueda('');
    setSeleccionado(null);
    setCantidad('');
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  const agregarArticulo = () => {
    if (!seleccionado || !cantidad) return;

    const cantidadNum = parseInt(cantidad);
    if (isNaN(cantidadNum) || cantidadNum <= 0) {
      alert('Cantidad inválida');
      return;
    }

    if (cantidadNum > seleccionado.stock) {
      alert('Cantidad excede el stock disponible');
      return;
    }

    const existente = articulos.find(a => a.codigo === seleccionado.codigo);

    if (existente) {
      setArticulos(prev =>
        prev.map(a =>
          a.codigo === seleccionado.codigo
            ? { ...a, cantidad: a.cantidad + cantidadNum }
            : a
        )
      );
    } else {
      setArticulos([...articulos, {
        codigo: seleccionado.codigo,
        cantidad: cantidadNum
      }]);
    }

    setArticulosDisponibles(prev =>
      prev.map(item =>
        item.codigo === seleccionado.codigo
          ? { ...item, stock: item.stock - cantidadNum }
          : item
      )
    );

    cerrarModal();
  };

  const resultados = articulosDisponibles.filter(p =>
    (p.codigo.toLowerCase().includes(busqueda.toLowerCase()) ||
     p.nombre.toLowerCase().includes(busqueda.toLowerCase())) &&
    p.stock > 0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Traslado guardado correctamente');
    setForm({ origen: '', destino: '', comentarios: '' });
    setArticulos([]);
  };

  if (loading) {
    return <div className="container py-4 text-center">Cargando datos...</div>;
  }

  return (
    <main className="container py-4">
      <h1 className="h5 mb-4">Registro de Traslado</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
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

        <div className="col-12">
          <h2 className="h6 mb-3 mt-4">Artículos del traslado</h2>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm mb-3"
            onClick={abrirModal}
          >
            <i className="fa-solid fa-plus me-2"></i>Agregar artículo
          </button>

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

        <div className="col-12">
          <button type="submit" className="btn btn-primary mt-3">
            <i className="fa-solid fa-floppy-disk me-2"></i>Guardar Traslado
          </button>
        </div>
      </form>

      {modalVisible && (
        <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Buscar producto</h5>
                <button type="button" className="btn-close" onClick={cerrarModal}></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Buscar por código o nombre"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />

                <div className="list-group">
                  {resultados.map((prod, i) => (
                    <button
                      key={i}
                      className={`list-group-item list-group-item-action ${seleccionado?.codigo === prod.codigo ? 'active' : ''}`}
                      onClick={() => setSeleccionado(prod)}
                    >
                      {prod.codigo} - {truncarTexto(prod.nombre, 25)} - {prod.stock} unidades
                    </button>
                  ))}
                </div>

                {seleccionado && (
                  <div className="mt-4">
                    <h6>Seleccionado: {seleccionado.nombre}</h6>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Cantidad a trasladar"
                      value={cantidad}
                      onChange={(e) => setCantidad(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && cantidad && seleccionado) {
                          e.preventDefault();
                          agregarArticulo();
                        }
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cerrarModal}>Cancelar</button>
                <button type="button" className="btn btn-primary" onClick={agregarArticulo} disabled={!seleccionado || !cantidad}>
                  Agregar al traslado
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default AñadirTraslados;
