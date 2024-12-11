import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard";

const DashboardLayout = () => {
  return (
    <main className="flex w-screen">
      <Dashboard />
      <section className="px-5 sm:py-6 flex-1">
        <Outlet />
      </section>
    </main>
  );
};

export default DashboardLayout;
