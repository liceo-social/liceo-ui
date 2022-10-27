import {
  Box,
  Button,
  createStyles,
  Group,
  Header,
  Menu,
  useMantineTheme,
  useMantineColorScheme,
  ActionIcon,
  Autocomplete,
} from "@mantine/core";
import {
  IconChevronDown,
  IconLogout,
  IconMoonStars,
  IconSearch,
  IconSettings,
  IconSun,
  IconUser,
} from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import LiceoLogo from "./logo.svg";

const useStyles = createStyles((theme) => {
  return {
    header: {
      padding: "0.75em 1.2em",
    },
    headerUserZone: {
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
    },
    userIcon: {
      width: 24,
      height: 24,
      borderRadius: "100%",
    },
    userButton: {
      color: theme.colors.white,
      "&:hover": {
        backgroundColor: theme.colors.lime[7],
      },
    },
  };
});

export default function LayoutHeader() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const navigate = useNavigate();

  return (
    <Header height={60}>
      <Box className={classes.header}>
        <Group position="apart">
          <Group>
            <img src={LiceoLogo} width={18} /> L I C E O
          </Group>
          <Group>
            <Button variant="light" title="Nueva Persona">
              Nueva persona
            </Button>
            <Autocomplete
              placeholder="Busqueda por ID"
              icon={<IconSearch />}
              data={["React", "Angular", "Svelte", "Vue"]}
            />
            <ActionIcon
              variant="default"
              onClick={() => toggleColorScheme()}
              size={36}
            >
              {colorScheme === "dark" ? (
                <IconSun size={16} />
              ) : (
                <IconMoonStars size={16} />
              )}
            </ActionIcon>
            <Menu width={240}>
              <Menu.Target>
                <Button
                  variant="light"
                  leftIcon={
                    <img
                      className={classes.userIcon}
                      src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                    />
                  }
                  rightIcon={<IconChevronDown size={18} stroke={1.5} />}
                  pr={12}
                >
                  jane.doe@smart...com
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  icon={
                    <IconSettings
                      size={16}
                      color={theme.colors.blue[6]}
                      stroke={1.5}
                    />
                  }
                >
                  Settings
                </Menu.Item>
                <Menu.Item
                  icon={
                    <IconUser
                      size={16}
                      color={theme.colors.blue[6]}
                      stroke={1.5}
                    />
                  }
                >
                  Profile
                </Menu.Item>
                <Menu.Divider></Menu.Divider>
                <Menu.Item
                  onClick={() => navigate("/logout")}
                  icon={
                    <IconLogout
                      size={16}
                      color={theme.colors.pink[6]}
                      stroke={1.5}
                    />
                  }
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </Box>
    </Header>
  );
}
