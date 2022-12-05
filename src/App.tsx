import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Fallback, Landing, Login, DashBoard } from "./Routes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Fallback />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<Fallback />} />;
}

export default App;
