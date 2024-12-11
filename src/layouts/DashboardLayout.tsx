import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard";

const DashboardLayout = () => {
  return (
    <main className="flex">
      <Dashboard />
      <section className="pl-5 py-6">
        <Outlet />
      </section>
    </main>
  );
};

export default DashboardLayout;
