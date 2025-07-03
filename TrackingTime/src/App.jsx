import { useState } from 'react'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Routes/Home';
import { SingUpForm } from './Routes/Sinup-form';
import { LoginForm } from './Routes/login-form';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      
    },
    {
      path: "/singup",
      element: <SingUpForm />,

    }, {
      path: "/singin",
      element: <LoginForm />,

    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;
