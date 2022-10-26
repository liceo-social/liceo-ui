import { ActionIcon, Box, Group, useMantineColorScheme } from "@mantine/core";
import {
  IconArrowLeft,
  IconChevronLeft,
  IconMenu,
  IconMoonStars,
  IconPresentationAnalytics,
  IconSun,
} from "@tabler/icons";

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
