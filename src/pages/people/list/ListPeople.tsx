import {
  Badge,
  Breadcrumbs,
  Button,
  Container,
  createStyles,
  Grid,
  Menu,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import {
  IconDeviceFloppy,
  IconFile,
  IconFileExport,
  IconFilter,
  IconSortAscendingLetters,
  IconTrash,
  IconTriangleInverted,
  IconTriangleSquareCircle,
  IconVectorTriangle,
  IconX,
} from "@tabler/icons";
import { useState } from "react";
import FilterBadge from "./FilterBadge";
import ListPeopleActions from "./ListPeopleActions";
import ListPeopleTable from "./ListPeopleTable";
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
  const [page, setPage] = useState(1);
  const query = queries.listPeople(page);

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
          <ListPeopleTable
            isLoading={query.isLoading}
            people={query.data?.items}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
