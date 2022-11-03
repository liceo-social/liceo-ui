import { Menu, UnstyledButton } from "@mantine/core";
import {
  IconDeviceFloppy,
  IconFile,
  IconFileExport,
  IconFilter,
  IconX,
} from "@tabler/icons";
import FilterBadge from "./FilterBadge";

export default function AppliedFilters() {
  return (
    <>
      <Menu position="bottom-start">
        <Menu.Target>
          <UnstyledButton>
            <IconFilter />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item icon={<IconDeviceFloppy size={16} stroke={1.5} />}>
            Salvar filtro actual
          </Menu.Item>
          <Menu.Item icon={<IconFile size={16} stroke={1.5} />}>
            Abrir filtro guardado
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item icon={<IconFileExport size={16} stroke={1.5} />}>
            Exportar a CSV
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item icon={<IconX size={16} stroke={1.5} color="red" />}>
            Limpiar filtro actual
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <FilterBadge label="Nombre" value="Juan Andres" />
      <FilterBadge label="Age" value="0-17" />
    </>
  );
}
