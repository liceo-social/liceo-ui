import {
  Anchor,
  Avatar,
  Badge,
  Center,
  createStyles,
  Skeleton,
  Table,
  TextInput,
} from "@mantine/core";
import {
  IconCheck,
  IconCross,
  IconMoodKid,
  IconMoodTongueWink2,
  IconX,
} from "@tabler/icons";
import { Link } from "react-router-dom";
import { Person } from "../domain";

interface ListPeopleTableProps {
  people: Person[] | undefined;
  isLoading: boolean;
}

const useStyles = createStyles(() => ({
  table: {
    ["td"]: {
      cursor: "pointer",
    },
    ["th.center"]: {
      textAlign: "center",
    },
    ["td.center"]: {
      textAlign: "center",
    },
  },
  tdCenter: {
    textAlign: "center",
  },
}));

export default function ListPeopleTable({
  people,
  isLoading,
}: ListPeopleTableProps) {
  const { classes } = useStyles();

  const getActiveIcon = (active: boolean) => {
    if (active) {
      return <Badge color="green">active</Badge>;
    }
    return <Badge color="red">inactive</Badge>;
  };

  const rows = people?.map((person) => {
    return (
      <tr key={person.id}>
        <td>
          <Center>
            <Avatar
              radius="xl"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
              alt="no image here"
            />
          </Center>
        </td>
        <td>{person.name}</td>
        <td className="center">{person.age}</td>
        <td className="center">
          <Anchor component={Link} to="/">
            {person.via}
          </Anchor>
        </td>
        <td className="center">{person.created}</td>
        <td className="center">{getActiveIcon(person.active)}</td>
        <td className="center">
          <Anchor component={Link} to="/">
            {person.handler}
          </Anchor>
        </td>
        <td className="center">
          <Anchor component={Link} to="/">
            {person.projects}
          </Anchor>
        </td>
      </tr>
    );
  });

  const emptyRows = [
    <tr key="9999">
      <td>
        <Center>
          <Avatar radius="xl" src={null} alt="no image here" />
        </Center>
      </td>
      <td>
        <Skeleton height={8} mt={6} width="80%" radius="xl" />
      </td>
      <td className="center">
        <Skeleton height={8} mt={6} width="50%" radius="xl" />
      </td>
      <td className="center">
        <Skeleton height={8} mt={6} width="20%" radius="xl" />
      </td>
      <td className="center">
        <Skeleton height={8} mt={6} width="40%" radius="xl" />
      </td>
      <td className="center">
        <Skeleton height={8} mt={6} width="40%" radius="xl" />
      </td>
      <td className="center">
        <Skeleton height={8} mt={6} width="70%" radius="xl" />
      </td>
      <td className="center">
        <Skeleton height={8} mt={6} width="70%" radius="xl" />
      </td>
    </tr>,
  ];

  return (
    <Table fontSize="md" className={classes.table} striped highlightOnHover>
      <thead>
        <tr>
          <th className="center">Foto</th>
          <th>Name</th>
          <th className="center">Age</th>
          <th className="center">Via</th>
          <th className="center">Created</th>
          <th className="center">Active</th>
          <th className="center">Handler</th>
          <th className="center">Project</th>
        </tr>
      </thead>
      <tbody>{isLoading ? emptyRows : rows}</tbody>
    </Table>
  );
}
