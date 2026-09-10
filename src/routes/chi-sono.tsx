import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/chi-sono")({
  component: () => <Outlet />,
});
