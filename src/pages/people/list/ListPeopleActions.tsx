import { Button, Menu, Text } from "@mantine/core";
import {
  IconArrowsLeftRight,
  IconChevronDown,
  IconFileExport,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from "@tabler/icons";

export default function ListPeopleActions() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button rightIcon={<IconChevronDown />}>Acciones</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Busqueda</Menu.Label>
        <Menu.Item icon={<IconSearch size={14} />}>Avanzada</Menu.Item>
        <Menu.Item icon={<IconFileExport size={14} />}>Exportar CSV</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
