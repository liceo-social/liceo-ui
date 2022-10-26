import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import LayoutHeader from "./LayoutHeader";
import LayoutNavbar from "./LayoutNavbar";

export default function Layout() {
  return (
    <AppShell padding="md" header={<LayoutHeader />} navbar={<LayoutNavbar />}>
      <Outlet />
    </AppShell>
  );
}
