import {
  Breadcrumbs,
  Container,
  createStyles,
  Grid,
  Menu,
  Title,
  UnstyledButton,
} from "@mantine/core";
import {
  IconDeviceFloppy,
  IconFile,
  IconFileExport,
  IconFilter,
  IconX,
} from "@tabler/icons";
import { useState } from "react";
import DataGrid from "./datagrid/DataGrid";
import FilterBadge from "./FilterBadge";
import ListPeopleActions from "./ListPeopleActions";
import { queries } from "./queries";

const useStyles = createStyles((theme) => ({
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
          <Menu position="bottom-start">
            <Menu.Target>
              <UnstyledButton>
                <IconFilter />
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<IconDeviceFloppy size={16} stroke={1.5} />}>
                Salvar filtro actual
              </Menu.Item>
              <Menu.Item icon={<IconFile size={16} stroke={1.5} />}>
                Abrir filtro guardado
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item icon={<IconFileExport size={16} stroke={1.5} />}>
                Exportar a CSV
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item icon={<IconX size={16} stroke={1.5} color="red" />}>
                Limpiar filtro actual
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <FilterBadge label="Nombre" value="Juan Andres" />
          <FilterBadge label="Age" value="0-17" />
        </Grid.Col>
        <Grid.Col xs={12}>
          <DataGrid
            result={query.data}
            elementsPerPage={10}
            columnDefs={[
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
              {
                field: "active",
                label: "Activo",
                type: "boolean",
                align: "center",
              },
              { field: "handler", label: "Responsable" },
              { field: "projects", label: "Proyectos" },
            ]}
            defaultColumnDef={{
              sorted: true,
              filtered: true,
            }}
            dataHandlers={{
              pagination: setPagination,
              sort: setPagination,
            }}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
