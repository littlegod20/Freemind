import { dashTabs } from "../../utils/constants";
import Freemind from "../../assets/freemind.svg";
import Tab from "../Tab";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("users");

  const navigate = useNavigate();

  const handleNavigation = (val: string) => {
    setActiveTab(val);
    localStorage.setItem("dashTab", val);
    if (val === "users") {
      navigate("/");
      return;
    }
    navigate(`${val}`);
  };

  useEffect(() => {
    const active = localStorage.getItem("dashTab");
    if (active) {
      setActiveTab(active);
    }
  }, []);

  return (
    <main className="hidden sm:block h-screen bg-dark-blue md:px-8 pt-5 w-16 md:min-w-64 text-sm font-extralight text-white">
      <header className="h-[10%]">
        <img src={Freemind} alt="logo" className="hidden md:block" />
      </header>
      <section className="flex flex-col items-center md:block">
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
      <section className="pt-6 flex flex-col items-center md:block">
        <p className="text-xs pb-2 hidden md:block">Settings</p>
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
