import { createStyles, Group, Paper, Text } from "@mantine/core";
import { IconCoin } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.xl * 1.5,
  },

  value: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1,
  },

  diff: {
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  title: {
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

interface StatProps {
  title: string;
  value: string;
  diff: number;
}

export default function Widget(stat: StatProps) {
  const { classes } = useStyles();
  return (
    <Paper withBorder p="md" radius="md" key={stat.title}>
      <Group position="apart">
        <Text size="xs" color="dimmed" className={classes.title}>
          {stat.title}
        </Text>
        <IconCoin className={classes.icon} size={22} stroke={1.5} />
      </Group>

      <Group align="flex-end" spacing="xs" mt={25}>
        <Text className={classes.value}>{stat.value}</Text>
        <Text
          color={stat.diff > 0 ? "teal" : "red"}
          size="sm"
          weight={500}
          className={classes.diff}
        >
          <span>{stat.diff}%</span>
        </Text>
      </Group>

      <Text size="xs" color="dimmed" mt={7}>
        Compared to previous month
      </Text>
    </Paper>
  );
}
