import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout01 from './layout/Layout01.jsx';
import Home from './Pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout01 />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
