import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

export default function AllRoutes() {
  const route = routes.map((route, idx) => {
    return {
      path: route.path,
      element: <route.component />,
    };
  });

  return useRoutes([...route]);
}
