import { useState } from "react";
import {
  createStyles,
  Navbar,
  UnstyledButton,
  Tooltip,
  Title,
  Collapse,
  Indicator,
} from "@mantine/core";
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconPresentationAnalytics,
  IconInfoCircle,
  IconDatabase,
  IconUsers,
  IconCalendar,
  IconUserOff,
  IconSocial,
  IconId,
  IconEngine,
  IconRoad,
  IconFlag,
  IconGenderAgender,
  IconGenderFemale,
} from "@tabler/icons";
import { Navigate, useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
  },

  aside: {
    flex: "0 0 60px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  main: {
    flex: 1,
    height: "100%",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  mainLink: {
    width: 44,
    height: 44,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },

  title: {
    boxSizing: "border-box",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: 18,
    height: 60,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  logo: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: 60,
    paddingTop: theme.spacing.md,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    marginBottom: theme.spacing.xl,
  },

  link: {
    boxSizing: "border-box",
    display: "block",
    textDecoration: "none",
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}px`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: 44,
    lineHeight: "44px",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  linkActive: {
    "&, &:hover": {
      borderLeftColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      backgroundColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
      color: theme.white,
    },
  },
}));

const linksMockDataFull = [
  {
    id: "home",
    label: "Home",
    icon: IconHome2,
    children: [
      {
        id: "dashboard",
        label: "Dashboard",
        link: "/",
        icon: IconPresentationAnalytics,
      },
      {
        id: "people",
        label: "Personas",
        link: "/people",
        icon: IconUsers,
      },
      {
        id: "agenda",
        label: "Agenda",
        link: "/agenda",
        icon: IconCalendar,
      },
      {
        id: "unsubscribe",
        label: "Solicitudes de baja",
        link: "/unsubcribe",
        icon: IconUserOff,
      },
    ],
  },
  {
    id: "master",
    label: "Datos maestros",
    icon: IconDatabase,
    link: "/master",
    children: [
      {
        id: "projects",
        label: "Projects",
        link: "/master/projects",
        icon: IconSocial,
      },
      {
        id: "idtypes",
        label: "Tipos de IDs",
        link: "/master/id-types",
        icon: IconId,
      },
      {
        id: "processtypes",
        label: "Tipos de procesos",
        link: "/master/process-types",
        icon: IconEngine,
      },
      {
        id: "accesstypes",
        label: "Vias de acceso",
        link: "/master/access-types",
        icon: IconRoad,
      },
      {
        id: "countries",
        label: "Paises",
        link: "/master/countries",
        icon: IconFlag,
      },
      {
        id: "sex",
        label: "Sexo",
        link: "/master/sex",
        icon: IconGenderFemale,
      },
      {
        id: "genre",
        label: "Genero",
        link: "/master/genre",
        icon: IconGenderAgender,
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    icon: IconFingerprint,
    children: [
      {
        id: "users",
        label: "Users",
        link: "/users",
      },
      {
        id: "roles",
        label: "Roles",
        link: "/roles",
      },
    ],
  },
  {
    id: "about",
    label: "About",
    link: "/about",
    icon: IconInfoCircle,
  },
];

export default function LayoutNavbar() {
  const navigate = useNavigate();
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("home");
  const [activeLink, setActiveLink] = useState("users");
  const [showItems, setShowItems] = useState(false);

  const hasMenuSubitems = (id: string) => {
    return (
      linksMockDataFull
        .filter((link) => link.id === id)
        .flatMap((link) => link.children || []).length > 0
    );
  };

  const handleMainLinkClick = (item: any) => {
    if (hasMenuSubitems(item.id)) {
      setShowItems(
        (item.id !== active && hasMenuSubitems(item.id)) ||
          (showItems == false && hasMenuSubitems(item.id))
      );
    } else {
      setShowItems(false);
      navigate(item.link);
    }
    setActive(item.id);
  };

  const mainLinks = linksMockDataFull.map((link) => {
    return (
      <Tooltip
        label={link.label}
        position="right"
        withArrow
        transitionDuration={0}
        key={link.label}
      >
        <UnstyledButton
          onClick={() => {
            handleMainLinkClick(link);
          }}
          className={cx(classes.mainLink, {
            [classes.mainLinkActive]: link.id === active,
          })}
        >
          <link.icon stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
    );
  });

  const getLinksFrom = (id: string) => {
    const links = linksMockDataFull
      .filter((link) => link.id === id)
      .flatMap((link) => link.children || []);

    if (links.length > 0) {
      return links.map((link) => (
        <a
          className={cx(classes.link, {
            [classes.linkActive]: activeLink === link?.id,
          })}
          href="#"
          onClick={(event) => {
            event.preventDefault();
            setActiveLink(link?.id || "home");
            navigate(link.link);
          }}
          key={link?.id}
        >
          {link?.label}
        </a>
      ));
    }
    return null;
  };

  return (
    <Navbar width={{ sm: showItems ? 300 : 40 }}>
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <IconPresentationAnalytics />
          </div>
          {mainLinks}
        </div>
        <Collapse in={showItems} className={classes.main}>
          <div className={classes.main}>
            <Title order={4} className={classes.title}>
              {active}
            </Title>
            {getLinksFrom(active)}
          </div>
        </Collapse>
      </Navbar.Section>
    </Navbar>
  );
}
