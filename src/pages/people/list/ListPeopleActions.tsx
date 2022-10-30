import { Box, Button, createStyles, Menu } from "@mantine/core";
import {
  IconChevronDown,
  IconFileExport,
  IconPlus,
  IconSearch,
  IconSettings,
} from "@tabler/icons";

export default function ListPeopleActions() {
  return (
    <Menu width={200} position="bottom-end">
      <Menu.Target>
        <Button
          variant="light"
          leftIcon={<IconSettings size={18} />}
          rightIcon={<IconChevronDown size={18} stroke={1.5} />}
        >
          Acciones
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item icon={<IconPlus size={16} />}>Nueva persona</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
