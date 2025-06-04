import React from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "./global.css";
import App from "./App.jsx";
import router from "./routes/AppRoutes.jsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
