import React, { useState, useEffect } from "react";

function Categorias() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  useEffect(() => {
    // Cargar categorías
    fetch('http://localhost:3001/api/categories')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data && data.data.length > 0) {
          setCategorias(data.data);
        }
      })
      .catch((error) => {
        console.error('Error al cargar categorías:', error);
      });

    // Cargar productos
    fetch('http://localhost:3001/api/products')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.products && data.products.length > 0) {
          setProductos(data.products);
        }
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
      });
  }, []);

  // Función para obtener el ID de la categoría seleccionada
  const getCategoriaId = (categoriaNombre) => {
    const categoria = categorias.find((cat) => cat.nombre === categoriaNombre);
    return categoria ? categoria.id : null;
  };

  return (
    <div>
      <h6 className="m-0 font-weight-bold text-primary ml-4 mt-3">Selecciona una categoría:</h6>
      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>
            <button className="btn" onClick={() => setCategoriaSeleccionada(categoria.nombre)}>
              {categoria.nombre}
            </button>
          </li>
        ))}
      </ul>

      {categoriaSeleccionada && (
        <ProductosPorCategoria
          productos={productos.filter(
            (producto) => producto.categoria_id === getCategoriaId(categoriaSeleccionada)
          )}
        />
      )}
    </div>
  );
}

function ProductosPorCategoria({ productos }) {
  return (
    <div>
      <h6 className="m-0 font-weight-bold text-primary ml-4 mb-3">Productos de la categoría seleccionada:</h6>
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
            <p className="ml-4">No se encontraron productos</p>
          )}
        </div>
    </div>
  );
}

export default Categorias;
