import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/home-page";
import MainLayout from "./layout/main-layout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
    ]
  },
]);
