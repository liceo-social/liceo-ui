import { createStyles, Group, Text, UnstyledButton } from "@mantine/core";
import { IconFilter, IconSortAscendingLetters } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: "19em",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.gray : theme.colors.gray[2],
    [":hover"]: {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.gray[7]
          : theme.colors.gray[0],
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    ["button"]: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
  },
  text: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: "auto",
    paddingTop: ".2em",
  },
  headerButtons: {
    display: "flex",
    ["button:hover svg"]: {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.gray[6]
          : theme.colors.gray[6],
    },
  },
}));

interface TableHeaderProps {
  label: string;
  sorted?: boolean;
  filtered?: boolean;
  align?: React.CSSProperties["textAlign"];
}

export default function TableHeader({
  label,
  sorted,
  filtered,
  align,
}: TableHeaderProps) {
  const { classes } = useStyles();

  const renderFilterIconButton = () => {
    return (
      <UnstyledButton>
        <IconFilter />
      </UnstyledButton>
    );
  };

  const renderSortIconButton = () => {
    return (
      <UnstyledButton>
        <IconSortAscendingLetters />
      </UnstyledButton>
    );
  };

  const filteringAndSorting = () => {
    if (sorted || filtered) {
      return (
        <div className={classes.headerButtons}>
          {filtered && renderFilterIconButton()}
          {sorted && renderSortIconButton()}
        </div>
      );
    }
    return null;
  };

  return (
    <th className={classes.wrapper}>
      <div className={classes.header}>
        <Text align={align} className={classes.text}>
          {label}
        </Text>
        {filteringAndSorting()}
      </div>
    </th>
  );
}
