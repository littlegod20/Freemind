import { Outlet } from "react-router-dom";
import Dashboard from "../components/widgets/Dashboard";

const DashboardLayout = () => {
  return (
    <main className="flex w-screen h-screen">
      <Dashboard />
      <section className="py-14 sm:py-6 px-4 flex-1 w-3/5 h-screen overflow-scroll">
        <Outlet />
      </section>
    </main>
  );
};

export default DashboardLayout;
