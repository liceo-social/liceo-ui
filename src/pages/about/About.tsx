import { Breadcrumbs, Container, Grid } from "@mantine/core";

export default function About() {
  return (
    <Container fluid>
      <Grid>
        <Grid.Col xs={12}>
          <Breadcrumbs>{["about"]}</Breadcrumbs>
        </Grid.Col>
        <Grid.Col xs={12}>
          <p>This little application only serves to the purposes of...</p>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
