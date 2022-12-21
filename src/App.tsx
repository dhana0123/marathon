import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Fallback,
  Landing,
  Login,
  DashBoard,
  ProjectCreate,
  Plans,
  Contact,
} from "./Routes";
import Projects from "./sections/Projects";
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
    path: "/plans",
    element: <Plans />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "/dashboard/projects",
        element: <Projects />,
      },
      {
        path: "/dashboard/Projects/create",
        element: <ProjectCreate />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<Fallback />} />;
}

export default App;
