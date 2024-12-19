import { dashTabs } from "../../utils/constants";
import Freemind from "../../assets/freemind.svg";
import DashTab from "../DashTab";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [increasDash, setIncreaseDash] = useState(true);

  const navigate = useNavigate();

  const handleDashIncrease = () => {
    setIncreaseDash(!increasDash);
    console.log(increasDash);
  };

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

    return () => {
      localStorage.removeItem("dashTab");
    };
  }, []);

  return (
    <main
      className={`hidden md:block h-screen relative bg-dark-blue  pt-5 transition-all  w-64 duration-300 ease-in text-sm font-extralight text-white  z-50  ${
        increasDash ? "pl-5" : "w-[64px]"
      } `}
    >
      <header
        className={`h-[10%] flex items-center gap-2 ${
          !increasDash ? "pl-5" : "justify-start"
        }`}
      >
        <Menu
          className="cursor-pointer transition-all hover:scale-110"
          size={20}
          onClick={handleDashIncrease}
        />
        {increasDash && <img src={Freemind} alt="logo" />}
      </header>
      <section
        className={`pt-6 flex flex-col items-start ${
          !increasDash ? " pl-5" : ""
        } `}
      >
        {dashTabs.slice(0, 5).map((item, index) => (
          <DashTab
            name={item.name}
            Icon={item.icon}
            activeTab={activeTab}
            onNavigation={handleNavigation}
            increaseDash={increasDash}
            key={index}
          />
        ))}
      </section>
      <section
        className={`pt-6 flex flex-col items-start ${
          !increasDash ? " pl-5" : ""
        } `}
      >
        {increasDash && <p className="text-xs pb-2">Settings</p>}
        {dashTabs.slice(5).map((item, index) => (
          <DashTab
            name={item.name}
            Icon={item.icon}
            activeTab={activeTab}
            onNavigation={handleNavigation}
            increaseDash={increasDash}
            key={index}
          />
        ))}
      </section>
    </main>
  );
};

export default Dashboard;
