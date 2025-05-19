import { Outlet } from "@remix-run/react";

export default function AdminLayout() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Admin Layout</h1>
      <Outlet />
    </div>
  );
}