import React from 'react';
import Login from './Login.jsx';
import Browse from './Browse.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {
  // Define routes using createBrowserRouter
  const AppRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/Browse',
      element: <Browse />
    }
  ]);

  return (
    <div>

      <RouterProvider router={AppRouter} />
      
    </div>
  );
};

export default Body;
