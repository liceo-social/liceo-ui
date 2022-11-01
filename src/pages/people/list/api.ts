import { findAllByAltText } from "@testing-library/react";
import { PagedResult, Pagination } from "../../../common/domain/pagination";
import { Person } from "../domain";

const range = (from: number, to: number): number[] => {
  const numbers: number[] = [];
  let i = 0;
  const diff = to - from;
  for (i = 0; i <= diff; i++) {
    numbers[i] = from + i;
  }
  return numbers;
};

const items = range(0, 100).map((n) => ({
  id: `$n`,
  name: `Juan Julianez ${n}`,
  icon: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
  age: 12,
  via: "Propia entidad",
  created: "28/12/2022",
  active: true,
  handler: "Peter Jusien",
  projects: "ALDEAS, CAMPAMENTOS...",
}));

const findAll = (pagination: Pagination) => {
  const from = pagination.max * (pagination.page - 1);
  const to = pagination.max * pagination.page;
  return items.slice(from, to);
};

const api = {
  listPeople: (pagination: Pagination): PagedResult<Person> => {
    const people: Person[] = findAll(pagination);
    return {
      items: people,
      isEmpty: false,
      total: items.length,
      size: people.length,
    };
  },
};

export { api };
