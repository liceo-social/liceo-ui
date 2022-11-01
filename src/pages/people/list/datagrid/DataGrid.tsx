import { Group, Table } from "@mantine/core";
import { Pagination as PaginationComponent } from "@mantine/core";
import { useState } from "react";
import { PagedResult, Pagination } from "../../../../common/domain/pagination";
import { resolveRender } from "./Renders";
import TableHeader from "./TableHeader";

type ColumnAlignment = "center" | "left" | "right";

interface ColumnDef {
  field: string;
  label: string;
  align?: ColumnAlignment;
  type?: string;
  sorted?: boolean;
  filtered?: boolean;
}

interface DefaultColumnDef {
  sorted: boolean;
  filtered: boolean;
}

interface DataHandlers<T> {
  pagination: (pagination: Pagination) => void;
  sort: (pagination: Pagination) => void;
}

interface DataGridProps<T> {
  result: PagedResult<T> | undefined;
  elementsPerPage: number;
  dataHandlers: DataHandlers<T>;
  columnDefs: ColumnDef[];
  defaultColumnDef?: DefaultColumnDef;
}

export default function DataGrid<T>({
  result,
  elementsPerPage,
  dataHandlers,
  columnDefs,
  defaultColumnDef,
}: DataGridProps<T>) {
  const [page, setPage] = useState(1);

  function handlePagination(page: number) {
    setPage(page);
    dataHandlers.pagination({ max: elementsPerPage, page: page });
  }

  const headers = columnDefs.map((definition, index) => (
    <TableHeader
      key={index}
      label={definition.label}
      align={definition.align}
      sorted={definition.sorted ?? defaultColumnDef?.sorted}
      filtered={definition.filtered ?? defaultColumnDef?.filtered}
    />
  ));

  const renderRows = (items: T[]) => {
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
  };

  return (
    <Table striped withColumnBorders highlightOnHover>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{renderRows(result?.items || [])}</tbody>
      <tfoot>
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
      </tfoot>
    </Table>
  );
}
