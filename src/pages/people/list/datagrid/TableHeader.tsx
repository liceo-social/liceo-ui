import { createStyles, Text, UnstyledButton } from "@mantine/core";
import {
  IconFilter,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
} from "@tabler/icons";
import { useState } from "react";
import { Filter, Sort } from "../../../../common/domain/pagination";

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
  name: string;
  label: string;
  sorted?: boolean;
  filtered?: boolean;
  align?: React.CSSProperties["textAlign"];
  onSorting?: (sort: Sort) => void;
  onFiltering?: (filter: Filter) => void;
}

export default function TableHeader({
  name,
  label,
  sorted,
  filtered,
  align,
  onSorting,
  onFiltering,
}: TableHeaderProps) {
  const [toggleDirection, setToggleDirection] = useState(false);
  const { classes } = useStyles();

  function handleOnSorting() {
    if (onSorting) {
      onSorting({ field: name, direction: toggleDirection ? "asc" : "desc" });
      setToggleDirection(!toggleDirection);
    }
  }

  function handleOnFiltering() {
    if (onFiltering) {
      onFiltering({ field: name, value: "???" });
    }
  }

  const renderFilterIconButton = () => {
    if (!filtered) {
      return null;
    }

    return (
      <UnstyledButton onClick={handleOnFiltering}>
        <IconFilter />
      </UnstyledButton>
    );
  };

  const renderSortIconButton = () => {
    if (!sorted) {
      return null;
    }

    return (
      <UnstyledButton onClick={handleOnSorting}>
        {toggleDirection && <IconSortAscendingLetters />}
        {!toggleDirection && <IconSortDescendingLetters />}
      </UnstyledButton>
    );
  };

  const filteringAndSorting = () => {
    if (sorted || filtered) {
      return (
        <div className={classes.headerButtons}>
          {renderFilterIconButton()}
          {renderSortIconButton()}
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
