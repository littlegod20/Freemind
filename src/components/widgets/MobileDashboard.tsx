import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import DashTab from "../DashTab";
import { dashTabs } from "@/utils/constants";
import { useNavigate } from "react-router-dom";

const MobileDashboard = () => {
  const [showDash, setShowDash] = useState(false);
  const [activeTab, setActiveTab] = useState("users");
  const navigate = useNavigate();

  const handleOutsideMenuClick = () => {
    setShowDash(false);
  };

  const handleShowDash = () => {
    setShowDash(!showDash);
  };

  const handleMobileNav = (val: string) => {
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
    <section className="md:hidden relative">
      <div className="pl-4 pt-4 sticky top-0 z-50 bg-white">
        <Menu
          onClick={handleShowDash}
          className="transition-all hover:scale-110 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          size={40}
        />
      </div>

      <section
        className={`absolute top-full w-screen   text-white transition-all duration-300 ease-in z-50 ${
          showDash ? "bg-black h-screen bg-opacity-40" : ""
        }`}
        onClick={handleOutsideMenuClick}
      >
        <div
          className={`transition-all duration-300 ease-in ${
            showDash ? " bg-dark-blue p-4" : "h-0  overflow-hidden"
          }`}
        >
          {dashTabs.map((item, index) => (
            <DashTab
              name={item.name}
              Icon={item.icon}
              activeTab={activeTab}
              onNavigation={handleMobileNav}
              increaseDash={true}
              key={index}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default MobileDashboard;