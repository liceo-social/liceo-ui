import { RouteObject } from "react-router-dom";
import ListPeople from "./list/ListPeople";

const routes: RouteObject[] = [
  {
    path: "/people",
    element: <ListPeople />,
  },
];

export { routes };
