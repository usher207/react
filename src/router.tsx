import { createBrowserRouter } from "react-router-dom";
import { Auth } from "./components/static/Auth";
import { Landing } from "./components/static/Landing";
import { Dashboard } from "./components/static/Dashboard";
import { PrivateRoute } from "./components/shared/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Auth />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute fallback="/login">
        <Dashboard />
      </PrivateRoute>
    ),
  },
]);
