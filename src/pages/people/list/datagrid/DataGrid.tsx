import { Group, Table } from "@mantine/core";
import { Pagination as PaginationComponent } from "@mantine/core";
import { useState } from "react";
import {
  Filter,
  PagedResult,
  Pagination,
  Sort,
} from "../../../../common/domain/pagination";
import { resolveRender } from "./Renders";
import TableHeader from "./TableHeader";

type ColumnAlignment = "center" | "left" | "right";

export interface ColumnDef {
  field: string;
  label: string;
  align?: ColumnAlignment;
  type?: string;
  sorted?: boolean;
  filtered?: boolean;
}

export interface DefaultColumnDef {
  sorted: boolean;
  filtered: boolean;
}

interface DataGridProps<T> {
  result: PagedResult<T> | undefined;
  elementsPerPage: number;
  columnDefs: ColumnDef[];
  columnDefsCommon?: DefaultColumnDef;
  onChange: (pagination: Pagination) => void;
}

export default function DataGrid<T>({
  result,
  elementsPerPage,
  onChange,
  columnDefs,
  columnDefsCommon,
}: DataGridProps<T>) {
  const [page, setPage] = useState<number>(1);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [sorts, setSorts] = useState<Sort[]>([]);

  function handlePagination(page: number) {
    setPage(page);
    onChange({ max: elementsPerPage, page: page });
  }

  function handleSorting(sort: Sort) {
    setSorts([sort]);
    onChange({ max: elementsPerPage, page, sorts: [...sorts, sort] });
  }

  function handleFiltering(filter: Filter) {
    setFilters([...filters, filter]);
    onChange({ max: elementsPerPage, page, sorts, filters });
  }

  function renderHeaders() {
    const columns = columnDefs.map((definition, index) => (
      <TableHeader
        name={definition.field}
        key={index}
        label={definition.label}
        align={definition.align}
        sorted={definition.sorted ?? columnDefsCommon?.sorted}
        filtered={definition.filtered ?? columnDefsCommon?.filtered}
        onSorting={handleSorting}
        onFiltering={handleFiltering}
      />
    ));

    return <tr>{columns}</tr>;
  }

  function renderRows(items?: T[]) {
    if (!items) {
      return null;
    }

    return items.map((item: T, i: number) => {
      const columns = columnDefs.map((definition: ColumnDef, j: number) => {
        const key = definition.field as keyof typeof item;
        const value: any = item[key];
        const render = resolveRender(definition.type);

        return (
          <td key={j} style={{ textAlign: definition.align }}>
            {render(value, definition.align)}
          </td>
        );
      });

      return <tr key={i}>{columns}</tr>;
    });
  }

  function renderFooter() {
    return (
      <tr>
        <th colSpan={columnDefs.length}>
          <Group position="right">
            <PaginationComponent
              total={(result?.total || elementsPerPage) / elementsPerPage}
              siblings={0}
              onChange={handlePagination}
              page={page}
            />
          </Group>
        </th>
      </tr>
    );
  }

  return (
    <Table striped withColumnBorders highlightOnHover>
      <thead>{renderHeaders()}</thead>
      <tbody>{renderRows(result?.items)}</tbody>
      <tfoot>{renderFooter()}</tfoot>
    </Table>
  );
}
