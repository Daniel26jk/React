import React, { useState, useEffect } from 'react';

function LastProduct() {
  const [lastProduct, setLastProduct] = useState(null);

  useEffect(() => {
   
    fetch('https://galante.onrender.com/api/products') 
      .then((response) => response.json())
      .then((data) => {
        if (data && data.products && data.products.length > 0) {
          const ultimoProducto = data.products[data.products.length - 1];
          setLastProduct(ultimoProducto);
        }
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
      });
      // luego solo llama lo que quieres buscar de la api del back .imagen .nombre .descripcion
  }, []);

  return (
    <div className="col-lg-6 mb-4" style={{ maxWidth: "none", flex:"none" }}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Último producto agregado</h6>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: '25rem' }}
              src={lastProduct ? lastProduct.imagen : 'assets/images/product_dummy.svg'}
              alt={lastProduct ? lastProduct.nombre : 'image dummy'}
            />
          </div>
          <p>
            {lastProduct ? lastProduct.descripcion : 'Cargando...'}
          </p>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Ver detalle de producto
          </a>
        </div>
      </div>
    </div>
  );
}

export default LastProduct;
