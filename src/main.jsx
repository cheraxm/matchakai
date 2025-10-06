import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Library from './pages/Library';
import Journal from './pages/Journal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/library",
    element: <Library />,
  },
  {
    path: "/journal",
    element: <Journal />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ThemeProvider> */}
      <RouterProvider router={router} />
    {/* </ThemeProvider> */}
  </StrictMode>,
)
