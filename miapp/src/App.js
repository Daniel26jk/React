import React from "react";
import { Router, Route, Link, Routes } from "react-router-dom";
import "../src/assets/style.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardStats from "./components/DashboardStats";
import LastProduct from "./components/LastProduct";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Especifica from "./components/Especificas";
import Productos from "./components/TotalProductos";
import Categorias from "./components/TotalCategorias";



function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      
      <div id="content-wrapper" className="d-flex flex-column">
        <Topbar></Topbar>
        
        
        {/* a */}
        <DashboardStats></DashboardStats>
        <LastProduct></LastProduct>
        <Categories></Categories>
        <Especifica></Especifica>
        <Link to="/Productos">Productos</Link>
        <Link to="/Categorias">Categorias</Link>
        <div>
          <Routes>
          <Route exact path="/Productos" element={<Productos/>}></Route>
          </Routes>
          <Routes>
          <Route exact path="/Categorias" element={<Categorias/>}></Route>
          </Routes>
          
        </div>
        
        <Footer></Footer>

      </div>
      
     
      
      
    </div>
  );
}

export default App;