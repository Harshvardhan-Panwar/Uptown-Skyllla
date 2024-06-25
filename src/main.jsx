import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import UnitPlans from "./UnitPlans.jsx";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/unit_plan",
    element: <UnitPlans />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
