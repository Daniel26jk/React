import React, { useState, useEffect } from 'react';

function DashboardStats() {
  const [ultimoUsuario, setUltimoUsuario] = useState(null);
  const [ultimoProducto, setUltimoProducto] = useState(null); // Aqui tienes que poner las variables para llamarlas en las apis 

  useEffect(() => {
    // Realiza una solicitud GET para cargar datos de usuarios desde tu API
    fetch('http://localhost:3001/api/users') // Revisa esto bien
      .then((response) => response.json())
      .then((data) => {
        if (data && data.users && data.users.length > 0) {
          // Selecciona el último elemento del array de usuarios
          const ultimo = data.users[data.users.length - 1];
          setUltimoUsuario(ultimo);
        }
      })
      .catch((error) => {
        console.error('Error al cargar usuarios:', error);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/api/products') // verifica que es correcta
      .then((response) => response.json())
      .then((data) => {
        if (data && data.products && data.products.length > 0) {
          // Selecciona el último elemento del array de productos
          const ultimoP = data.products[data.products.length - 1];
          setUltimoProducto(ultimoP);
        }
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
      });
  }, []); // Agrega los corchetes vacíos para que este efecto se ejecute solo una vez

  // aqui puedes poner mas apis

  return (
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Products in Data Base
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{ultimoProducto ? ultimoProducto.id : "Cargando..."}</div>
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
                  Amount in products
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">$546,456</div>
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
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Users quantity</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {ultimoUsuario ? ultimoUsuario.id : "Cargando..."}
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