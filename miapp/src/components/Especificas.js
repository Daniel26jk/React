import React, { useState, useEffect } from 'react';

function LastUsers() {
  const [LastUsers, setLastUsers] = useState(null);

  useEffect(() => {
   
    fetch('http://localhost:3001/api/users') 
      .then((response) => response.json())
      .then((data) => {
        if (data && data.users && data.users.length > 0) {
          const ultimoUsuario = data.users[data.users.length - 1];
          setLastUsers(ultimoUsuario);
        }
      })
      .catch((error) => {
        console.error('Error al cargar Usuarios:', error);
      });
      // luego solo llama lo que quieres buscar de la api del back .imagen .nombre .descripcion
  }, []);

  return (
    <div className="col-lg-6 mb-4" style={{ maxWidth: "none", flex:"none" }}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Último usuario agregado</h6>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: '25rem' }}
              src={LastUsers ? LastUsers.imagen : 'https://cdn-icons-png.flaticon.com/512/5556/5556468.png'}
              alt={LastUsers ? LastUsers.nombre : 'image dummy'}
            />
          </div>
          <p>
            Nombre: {LastUsers ? LastUsers.nombre : 'Cargando...'}
          </p>
          <p>
            Email: {LastUsers ? LastUsers.email : 'No disponible'}
          </p>
          <a href="/" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
      </div>
    </div>
  );
}

export default LastUsers;
