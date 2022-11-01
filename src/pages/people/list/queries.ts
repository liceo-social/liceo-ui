import { useQuery } from "@tanstack/react-query";
import { Pagination } from "../../../common/domain/pagination";
import { api } from "./api";

const queries = {
  listPeople: (pagination: Pagination) => {
    return useQuery(["people", [pagination.page, pagination.max]], () =>
      api.listPeople(pagination)
    );
  },
};

export { queries };
