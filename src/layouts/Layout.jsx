import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <section className="flex fade-in">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default Layout;
