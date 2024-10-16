// src/layout/Layout.js
import React from "react";
import Header from "./Header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
