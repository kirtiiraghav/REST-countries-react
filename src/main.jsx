import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css'
import HomePage from './components/HomePage.jsx';
import CountryDetails from './components/CountryDetails.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/:country",
          element: <CountryDetails />,
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
