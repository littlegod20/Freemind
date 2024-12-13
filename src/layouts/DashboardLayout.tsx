import { Outlet } from "react-router-dom";
import Dashboard from "../components/widgets/Dashboard";

const DashboardLayout = () => {
  return (
    <main className="flex h-screen w-screen">
      <Dashboard />
      <section className="px-5 py-14 sm:py-6 flex-1 w-3/5">
        <Outlet />
      </section>
    </main>
  );
};

export default DashboardLayout;
