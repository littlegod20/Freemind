import { dashTabs } from "../utils/constants";
import Freemind from "../assets/freemind.svg";
import Tab from "./widgets/Tab";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("users");

  const navigate = useNavigate();

  const handleNavigation = (val: string) => {
    setActiveTab(val);
    if (val === "users") {
      navigate("/");
      return;
    }
    navigate(`${val}`);
  };
  return (
    <main className="h-screen bg-dark-blue sm:px-8 pt-5 w-16 sm:min-w-64 text-sm font-extralight text-white">
      <header className="h-[10%]">
        <img src={Freemind} alt="logo" className="hidden sm:block" />
      </header>
      <section className="flex flex-col items-center sm:block">
        {dashTabs.slice(0, 5).map((item, index) => (
          <Tab
            name={item.name}
            Icon={item.icon}
            activeTab={activeTab}
            onNavigation={handleNavigation}
            key={index}
          />
        ))}
      </section>
      <section className="pt-6 flex flex-col items-center sm:block">
        <p className="text-xs pb-2 hidden sm:block">Settings</p>
        {dashTabs.slice(5).map((item, index) => (
          <Tab
            name={item.name}
            Icon={item.icon}
            activeTab={activeTab}
            onNavigation={handleNavigation}
            key={index}
          />
        ))}
      </section>
    </main>
  );
};

export default Dashboard;
