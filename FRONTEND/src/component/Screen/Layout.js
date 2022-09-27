import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar"
const Layout = ({ children }) => {
  return (
    <div className="h-full flex flex-row justify-start">
    <Sidebar />
  
    <div className="flex-1 bg-gray-100">
    <Navbar/>
        {children}
    </div>
  </div>
  );
};

export default Layout;