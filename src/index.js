import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.js'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Projects from './routes/Projects.jsx'
import Company from './routes/Company.jsx'
import NewProject from './routes/NewProject.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/company",
        element: <Company />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/newproject",
        element: <NewProject />
      },

      // nested routes
      {
        path: '/contact/:id'
      }

    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
