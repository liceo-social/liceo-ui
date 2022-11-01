import {
  Anchor,
  Avatar,
  Badge,
  Button,
  Center,
  Checkbox,
  createStyles,
  Group,
  Pagination,
  RangeSlider,
  Select,
  Skeleton,
  Slider,
  Table,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import {
  IconBuildingCommunity,
  IconCalendar,
  IconCheck,
  IconCircle,
  IconCircleCaretDown,
  IconCircleDot,
  IconCircleLetterA,
  IconCircleLetterI,
  IconCross,
  IconMoodKid,
  IconMoodTongueWink2,
  IconRoad,
  IconRoadOff,
  IconSearch,
  IconX,
} from "@tabler/icons";
import { Link } from "react-router-dom";
import { Person } from "../domain";
import TableHeader from "./datagrid/TableHeader";

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
    ["tfoot > tr > th"]: {
      paddingTop: "1.5em",
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
      return <IconCircleLetterA color="green" />;
    }
    return <IconCircleLetterI color="red" />;
  };

  const rows = people?.map((person) => {
    return (
      <tr key={person.id}>
        <td style={{ paddingLeft: "2em" }}>
          <Group>
            <Avatar
              radius="xl"
              size={32}
              src={person.icon}
              alt="no image here"
            />
            {person.name}
          </Group>
        </td>
        <td className="center">{person.age}</td>
        <td className="center">{person.via}</td>
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
        <Group>
          <Avatar radius="xl" src={null} alt="no image here" />
          <Skeleton height={8} mt={6} width="40%" radius="xl" />
        </Group>
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
    <Table className={classes.table} striped withColumnBorders highlightOnHover>
      <thead>
        <tr>
          <TableHeader label="Nombre" sorted filtered />
          <TableHeader label="Age" sorted filtered />
          <TableHeader label="Via" sorted filtered />
          <TableHeader label="Created" sorted filtered />
          <TableHeader label="Active" sorted filtered />
          <TableHeader label="Handler" sorted filtered />
          <TableHeader label="Projects" sorted filtered />
        </tr>
      </thead>
      <tbody>{isLoading ? emptyRows : rows}</tbody>
      <tfoot>
        <tr>
          <th colSpan={7}>
            <Group position="right">
              {!isLoading && <Pagination total={100} page={1} />}
            </Group>
          </th>
        </tr>
      </tfoot>
    </Table>
  );
}
