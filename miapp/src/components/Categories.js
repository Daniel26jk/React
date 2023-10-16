import React, { useState, useEffect } from 'react';
import "../assets/style.css"

function Categories() {
  const [categoryNames, setCategoryNames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/categories')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data && data.data.length > 0) {
          // Trae todos los nombres de categoría en un arreglo
          const names = data.data.map(category => category.nombre); //no es for es map c:<
          setCategoryNames(names);
        }
      })
      .catch((error) => {
        console.error('Error al cargar las categorías:', error);
      });
  }, []);

  return (
    <div className="col-lg-6 mb-4" style={{ maxWidth: "none", flex: "none" }}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Categorías en Base de Datos</h6>
        </div>
        <div className="card-body">
          <div className="row"> {/* se necesita la key=index sino salta un error  */}
            {categoryNames.length > 0 ? (
              categoryNames.map((name, index) => (
                <div key={index} className="col-lg-6 mb-4">
                  <div className="card bg-info text-white shadow">
                    <div className="card-body">{name}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-lg-6 mb-4">
                <div className="card bg-info text-white shadow">
                  <div className="card-body">Cargando...</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
