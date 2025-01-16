import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const noFooterPaths = ["/find-help"];

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default Layout;
