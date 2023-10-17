import React, { useState, useEffect } from 'react';

function DashboardStats() {
  const [ultimoUsuario, setUltimoUsuario] = useState(null);
  const [ultimoProducto, setUltimoProducto] = useState(null);
  const [totalPrecioProductos, setTotalPrecioProductos] = useState(0);

  useEffect(() => {
    fetch('https://galante.onrender.com/api/users')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.count) {
          const ultimo = data.count;
          setUltimoUsuario(ultimo);
        }
      })
      .catch((error) => {
        console.error('Error al cargar usuarios:', error);
      });
  }, []);

  useEffect(() => {
    fetch('https://galante.onrender.com/api/products')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.count) {
          const ultimoP = data.count;
          setUltimoProducto(ultimoP);
        }
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
      });
  }, []);

  useEffect(() => {
    fetch('https://galante.onrender.com/api/products')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.products && data.products.length > 0) {
          // Calcula el precio total sumando los precios de todos los productos
          //ParseFloat es para cambiar numeros en string a numeros enteros *ignora lo que no es numero "12dolares" traera 12
          const total = data.products.reduce((acc, product) => acc + parseFloat(product.precio), 0);
          setTotalPrecioProductos(total);
        }
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
      });
  }, []);

  return (
    <div className="row ml-1 mr-1">
      <div className="col-md-4 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Productos en Base de Datos
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{ultimoProducto ? ultimoProducto : "Cargando..."}</div>
              </div>
              <div className="col-auto">
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Total en productos
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">$ {totalPrecioProductos}</div>
              </div>
              <div className="col-auto">
                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Cantidad de usuarios</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {ultimoUsuario ? ultimoUsuario : "Cargando..."}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-user-check fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardStats;
