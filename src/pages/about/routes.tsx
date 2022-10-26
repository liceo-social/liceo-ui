import { RouteObject } from "react-router-dom";
import About from "./About";

const routes: RouteObject[] = [
  {
    path: "/about",
    element: <About />,
  },
];

export { routes };
