import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
import Home from "../pages/Home/Home";
import Privacy from "../pages/Privacy/Privacy";
import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/privacy-policy",
        element: <Privacy />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default router;
