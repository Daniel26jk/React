import React, { useState, useEffect } from 'react';

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.products && data.products.length > 0) {
          // Almacena todos los productos en el estado
          setProductos(data.products);
        }
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
      });
  }, []);

  return (
    <div className="col-lg-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Productos</h6>
        </div>
        <div className="card-body">
          {productos.length > 0 ? (
            <div className="row">
              {productos.map((producto) => (
                <div className="col-lg-4" key={producto.id}>
                  <div className="card mb-4">
                    <img
                      className="card-img-top"
                      src={producto.imagen || 'assets/images/product_dummy.svg'}
                      alt={producto.nombre || 'image dummy'}
                      style={{ height: '300px' }} // Ajusta la altura deseada
                    />
                    <div className="card-body">
                      <h5 className="card-title">{producto.nombre || 'Nombre no disponible'}</h5>
                      <p className="card-text">{producto.descripcion || 'Descripción no disponible'}</p>
                      <p className='card-text'>{producto.precio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Cargando productos...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Productos;
