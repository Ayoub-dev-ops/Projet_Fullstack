import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Contact from "./routes/contacts";
import Career from "./routes/career";
import Project from "./routes/projects";
import Login from "./routes/login";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/pages/1",
        element: <Contact />,
      },
      {
        path: "/pages/2",
        element: <Career />,
      },
      {
        path: "/pages/3",
        element: <Project />,
      },
      {
        path: "/pages/4",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
