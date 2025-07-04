import React, { useEffect } from "react";
import Layout from "./layouts/Layout";
import { useLenis } from "./utils/useLenis";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useLenis();
  return <Layout />;
};

export default App;
