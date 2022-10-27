import { Breadcrumbs, Container, Grid, Skeleton } from "@mantine/core";
import Widget from "./Widget";

function Home() {
  return (
    <Container fluid>
      <Grid>
        <Grid.Col xs={12}>
          <Breadcrumbs>{["home"]}</Breadcrumbs>
        </Grid.Col>
        <Grid.Col xs={3}>
          <Widget title="Nasdaq" value="12" diff={0} />
        </Grid.Col>
        <Grid.Col xs={3}>
          <Widget title="S&P 500" value="11" diff={0} />
        </Grid.Col>
        <Grid.Col xs={3}>
          <Skeleton height={130} radius="md" animate={false} />
        </Grid.Col>
        <Grid.Col xs={3}>
          <Skeleton height={130} radius="md" animate={false} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Home;
