import React from "react";
import "../src/assets/style.css"
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardStats from "./components/DashboardStats";
import LastProduct from "./components/LastProduct";
import Categories from "./components/Categories";
import Footer from "./components/Footer";


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
        <Footer></Footer>

      </div>
      
    </div>
  );
}

export default App;