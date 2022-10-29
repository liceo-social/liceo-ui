export interface Pagination {
  page: number;
  max: number;
}

export interface PagedResult<T> {
  items: T[];
  size: number;
  isEmpty: boolean;
}
