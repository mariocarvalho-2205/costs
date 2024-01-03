import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.js'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Company from './pages/Company.jsx'
import NewProject from './pages/NewProject.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/company",
        element: <Company />
      },
      {
        path: "/newproject",
        element: <NewProject />
      },

      // nested routes
      // {
      //   path: '/contact/:id'
      // }

    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
