import {
  Badge,
  Center,
  createStyles,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { IconCircleX, IconFilter, IconX } from "@tabler/icons";

interface FilterBadgeProps {
  label: string;
  value: string;
}

const useStyles = createStyles((theme) => ({
  outerBadge: {
    height: "4em",
    padding: "0 2em",
    marginLeft: "1em",
  },
  innerBadge: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    minHeight: "1em",
    ["button"]: {
      padding: "0",
      lineHeight: "0",
      margin: "0em 0 0 .5em",
      ["svg:hover"]: {
        borderRadius: "100%",
        color:
          theme.colorScheme === "dark"
            ? theme.colors.blue[9]
            : theme.colors.blue[2],
      },
    },
  },
}));

export default function FilterBadge({ label, value }: FilterBadgeProps) {
  const { classes } = useStyles();

  return (
    <Badge className={classes.outerBadge}>
      <div className={classes.innerBadge}>
        <Text>
          {label}: {value}{" "}
        </Text>
        <UnstyledButton>
          <IconFilter size={22} />
        </UnstyledButton>
        <UnstyledButton>
          <IconCircleX size={22} />
        </UnstyledButton>
      </div>
    </Badge>
  );
}
