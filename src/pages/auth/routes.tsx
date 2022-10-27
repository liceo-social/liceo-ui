import { RouteObject } from "react-router-dom";
import Login from "./Login";

const routes: RouteObject[] = [
  {
    path: "/logout",
    element: <Login />,
  },
];

export { routes };
