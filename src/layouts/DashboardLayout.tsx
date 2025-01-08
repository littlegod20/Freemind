import { Outlet } from "react-router-dom";
import Dashboard from "../components/widgets/Dashboard";
import MobileDashboard from "@/components/widgets/MobileDashboard";
import { Suspense } from "react";

const DashboardLayout = () => {
  return (
    <main className="flex md:flex-row flex-col w-screen h-screen">
      <Dashboard />
      <MobileDashboard />
      <Suspense fallback={<p>Loading...</p>}>
        <section className="md:py-6 py-4 px-4 flex-1 md:w-3/5 h-screen overflow-scroll">
          <Outlet />
        </section>
      </Suspense>
    </main>
  );
};

export default DashboardLayout;
