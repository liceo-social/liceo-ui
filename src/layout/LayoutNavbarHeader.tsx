import { ActionIcon, Box, Group } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons";

export default function LayoutNavbarHeader() {
  return (
    <Box>
      <Group position="apart">
        <Group>Menu</Group>
        <ActionIcon variant="default" size={30}>
          <IconChevronLeft size={16} />
        </ActionIcon>
      </Group>
    </Box>
  );
}
