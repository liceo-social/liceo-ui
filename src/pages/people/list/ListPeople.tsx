import {
  Badge,
  Breadcrumbs,
  Button,
  Container,
  createStyles,
  Grid,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";
import ListPeopleActions from "./ListPeopleActions";
import ListPeopleTable from "./ListPeopleTable";
import { queries } from "./queries";

const useStyles = createStyles((theme) => ({
  pageBreadcrumbs: {
    marginBottom: "0em",
  },
  pageHeader: {
    marginBottom: ".5em",
    marginTop: "0",
    paddingTop: 0,
  },
  pageHeaderActions: {
    display: "flex",
    justifyContent: "end",
    ["button"]: {
      width: "10em",
      marginLeft: "1em",
    },
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
          Filtros: <Badge>Nombre: Juan Andres X</Badge>{" "}
          <Badge color="orange">Age: 12-18 X</Badge>
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
