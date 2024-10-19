import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

import './index.css'
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  { path: "/contact", 
    element: <Contact /> 
  },
  { path: "/login", 
    element: <Login/> 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

export default router;