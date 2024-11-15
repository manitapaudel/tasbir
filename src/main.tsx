import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Root from "./routes/Root";
import "./index.css";
import { SkeletonTheme } from "react-loading-skeleton";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SkeletonTheme baseColor="#9cb9d1" highlightColor="#cfdaec">
      <RouterProvider router={router} />
    </SkeletonTheme>
  </StrictMode>
);
