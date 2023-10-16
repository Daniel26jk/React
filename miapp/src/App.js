import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../src/assets/style.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardStats from "./components/DashboardStats";
import LastProduct from "./components/LastProduct";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Especifica from "./components/Especificas";



function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Topbar></Topbar>
        {/* Rest of your content */}
        <DashboardStats></DashboardStats>
        <LastProduct></LastProduct>
        <Categories></Categories>
        <Especifica></Especifica>
        <Footer></Footer>

      </div>
      
      
    </div>
  );
}

export default App;