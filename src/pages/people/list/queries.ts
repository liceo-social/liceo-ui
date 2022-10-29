import { useQuery } from "@tanstack/react-query";
import { api } from "./api";

const queries = {
  listPeople: (page: number) => {
    return useQuery(["people", page], () => api.listPeople({ max: 20, page }));
  },
};

export { queries };
