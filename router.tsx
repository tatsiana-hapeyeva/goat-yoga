import { createBrowserRouter } from "react-router";
import MainLayout from "./src/layouts/MainLayout";
import HomePage from "./src/pages/HomePage";
import ToBeginPage from "./src/pages/ToBeginPage";
import PrivateEventsPage from "./src/pages/PrivateEventsPage";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/tobegin",
        element: <ToBeginPage />,
      },
      {
        path: "/private-events",
        element: <PrivateEventsPage />,
      },
    ],
  },
]);

export default router;
