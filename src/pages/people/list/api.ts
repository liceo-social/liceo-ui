import { PagedResult, Pagination } from "../../../common/domain/pagination";
import { Person } from "../domain";

const api = {
  listPeople: (pagination: Pagination): PagedResult<Person> => {
    console.log("refeching....");
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2].map((n) => ({
        id: "123",
        name: "Juan Andres Julianez",
        icon: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        age: 12,
        via: "Propia entidad",
        created: "28/12/2022",
        active: true,
        handler: "Peter Jusien",
        projects: "ALDEAS, CAMPAMENTOS...",
      })),
      isEmpty: false,
      size: 3,
    };
  },
};

export { api };
