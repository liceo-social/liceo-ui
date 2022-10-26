import { RouteObject } from "react-router-dom";
import Home from "./Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export { routes };
