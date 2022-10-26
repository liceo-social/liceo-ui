import { Breadcrumbs, Container, Grid, Skeleton } from "@mantine/core";
import { useEffect, useState } from "react";
import Widget from "./Widget";

const KEYS_NASDAQ = "nasdaq";
const KEYS_SP500 = "sp500";

function Home() {
  const [nasdaq, setNasdaq] = useState("-");
  const [sp500, setSp500] = useState("-");
  const [ws, setWs] = useState({} as Record<string, WebSocket>);

  const onMessageFor =
    (websocket: WebSocket, queue: string) => (event: any) => {
      const data = JSON.parse(event.data);
      const next = data[queue];

      if (next) {
        if (queue === KEYS_NASDAQ) {
          setNasdaq(next);
        }
        if (queue === KEYS_SP500) {
          setSp500(next);
        }
      }
      websocket.send("received");
    };

  useEffect(() => {
    console.log("connecting to server");

    const sp = new WebSocket(`ws://${window.location.hostname}:8000/ws/sp500`);
    const nq = new WebSocket(`ws://${window.location.hostname}:8000/ws/nasdaq`);
    const all: Record<string, WebSocket> = {};

    sp.onmessage = onMessageFor(sp, KEYS_SP500);
    nq.onmessage = onMessageFor(nq, KEYS_NASDAQ);

    all[KEYS_SP500] = sp;
    all[KEYS_NASDAQ] = nq;

    setWs(all);

    return function cleanup() {
      console.log("closing connections");
      ws[KEYS_NASDAQ]?.close();
      ws[KEYS_SP500]?.close();
    };
  }, []);

  return (
    <Container fluid>
      <Grid>
        <Grid.Col xs={12}>
          <Breadcrumbs>{["home"]}</Breadcrumbs>
        </Grid.Col>
        <Grid.Col xs={3}>
          <Widget title="Nasdaq" value={nasdaq} diff={0} />
        </Grid.Col>
        <Grid.Col xs={3}>
          <Widget title="S&P 500" value={sp500} diff={0} />
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
