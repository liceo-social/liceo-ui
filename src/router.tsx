import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";

import { routes as RoutesPeople } from "./pages/people/routes";
import { routes as RoutesAbout } from "./pages/about/routes";
import { routes as RoutesHome } from "./pages/home/routes";
import { routes as AuthRoutes } from "./pages/auth/routes";

const router = createBrowserRouter([
  ...AuthRoutes,
  {
    path: "/",
    element: <Layout />,
    children: [...RoutesHome, ...RoutesAbout, ...RoutesPeople],
  },
]);

export function Router() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <RouterProvider router={router} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
