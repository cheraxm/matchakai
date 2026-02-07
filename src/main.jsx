import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Journal from "./pages/Journal";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import CreateJournal from "./pages/CreateJournal"
import JournalDetail from './pages/JournalDetail';

import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
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
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/journal/:journalId",
        element: <JournalDetail />
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/journal/new",
    element: <CreateJournal />
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ThemeProvider> */}
    <RouterProvider router={router} />
    {/* </ThemeProvider> */}
  </StrictMode>
);
