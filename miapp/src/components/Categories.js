import React, { useState, useEffect } from 'react';
import "../assets/style.css"

function Categories() {
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    
    fetch('http://localhost:3001/api/categories') 
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data && data.data.length > 0) {
          const firstCategory = data.data[0];
          setCategoryName(firstCategory.nombre);
        }
      })
      .catch((error) => {
        console.error('Error al cargar la categoría:', error);
      });
  }, []);

  return (
    <div className="col-lg-6 mb-4" style={{ maxWidth: "none", flex: "none" }} >
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-info text-white shadow">
                <div className="card-body">{categoryName || 'Cargando...'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
