export interface Filter {
  field: string;
  value: string;
}

export interface Pagination {
  page: number;
  max: number;
  sorts?: Sort[];
  filters?: Filter[];
}

export type SortDirection = "asc" | "desc";

export interface Sort {
  field: string;
  direction: SortDirection;
}

export interface PagedResult<T> {
  items: T[];
  size: number;
  total: number;
  isEmpty: boolean;
}

export const EMPTY_PAGED_RESULT = {
  items: [],
  size: 0,
  total: 0,
  isEmpty: true,
};
