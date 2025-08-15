import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Privacy from "../pages/Privacy/Privacy";
import { Navigate } from "react-router-dom";
import Terms from "../pages/Terms/Terms";
import DeeplinkRedirect from "../pages/DeepLink/DeepLink";
import AppRedirect from "../pages/AppRedirect/AppRedirect";

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
        path: "/terms-and-conditions",
        element: <Terms />,
      },
      {
        path: "/app",
        element: <AppRedirect />,
      },
      {
        path: "/deeplink/:type/:uuid?",
        element: <DeeplinkRedirect />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default router;
