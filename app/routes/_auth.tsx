import { Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Authentication</h1>
      <Outlet />
    </div>
  )
}