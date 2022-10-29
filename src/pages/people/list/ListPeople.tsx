import {
  Breadcrumbs,
  Button,
  Container,
  Grid,
  SimpleGrid,
} from "@mantine/core";
import { useState } from "react";
import { Person } from "../domain";
import ListPeopleTable from "./ListPeopleTable";
import { queries } from "./queries";

export default function ListPeople() {
  const [page, setPage] = useState(1);
  const query = queries.listPeople(page);

  return (
    <Container fluid>
      <Grid>
        <Grid.Col xs={12}>
          <Breadcrumbs>{["home"]}</Breadcrumbs>
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
