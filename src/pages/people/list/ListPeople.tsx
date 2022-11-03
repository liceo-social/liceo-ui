import {
  Breadcrumbs,
  Container,
  createStyles,
  Grid,
  Title,
} from "@mantine/core";
import { useState } from "react";
import AppliedFilters from "./AppliedFilters";
import DataGrid, { ColumnDef, DefaultColumnDef } from "./datagrid/DataGrid";
import ListPeopleActions from "./ListPeopleActions";
import { queries } from "./queries";

const DATAGRID_COLUMN_DEFAULTS: DefaultColumnDef = {
  sorted: true,
  filtered: true,
};

const DATAGRID_COLUMNS: ColumnDef[] = [
  {
    field: "icon",
    label: "Foto",
    type: "avatar",
    align: "center",
    sorted: false,
    filtered: false,
  },
  { field: "name", label: "Nombre" },
  { field: "age", label: "Edad", align: "center" },
  { field: "via", label: "Via", align: "center" },
  { field: "created", label: "Creado", align: "center" },
  { field: "active", label: "Activo", type: "boolean", align: "center" },
  { field: "handler", label: "Responsable" },
  { field: "projects", label: "Proyectos" },
];

const useStyles = createStyles(() => ({
  pageBreadcrumbs: {
    marginBottom: "0em",
    paddingBottom: 0,
  },
  pageHeader: {
    marginBottom: "2em",
  },
  pageHeaderActions: {
    display: "flex",
    alignItems: "start",
    paddingTop: 0,
    marginTop: 0,
    justifyContent: "end",
  },
}));

export default function ListPeople() {
  const { classes } = useStyles();
  const [pagination, setPagination] = useState({ max: 10, page: 1 });
  const query = queries.listPeople(pagination);

  return (
    <Container fluid>
      <Grid>
        <Grid.Col xs={12} className={classes.pageBreadcrumbs}>
          <Breadcrumbs>{["home", "people"]}</Breadcrumbs>
        </Grid.Col>
        <Grid.Col xs={10} className={classes.pageHeader}>
          <Title order={3}>Listado de personas</Title>
        </Grid.Col>
        <Grid.Col xs={2} className={classes.pageHeaderActions}>
          <ListPeopleActions />
        </Grid.Col>
        <Grid.Col xs={12}>
          <AppliedFilters />
        </Grid.Col>
        <Grid.Col xs={12}>
          <DataGrid
            result={query.data}
            elementsPerPage={10}
            columnDefs={DATAGRID_COLUMNS}
            columnDefsCommon={DATAGRID_COLUMN_DEFAULTS}
            onChange={setPagination}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
