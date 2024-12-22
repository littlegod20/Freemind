import { Menu } from "lucide-react";
import { useState } from "react";
import DashTab from "../DashTab";
import { dashTabs } from "@/utils/constants";

const MobileDashboard = () => {
  const [showDash, setShowDash] = useState(false);

  const handleShowDash = () => {
    setShowDash(!showDash);
  };
  return (
    <section className="md:hidden relative">
      <div className="pl-4 pt-4 sticky top-0 z-50 bg-white">
        <Menu
          onClick={handleShowDash}
          className="transition-all hover:scale-110 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          size={40}
        />
      </div>
      {/* {showDash && ( */}
      <section
        className={`absolute top-full w-screen   text-white transition-all duration-300 ease-in z-50 ${
          showDash ? " bg-dark-blue p-4" : "h-0  overflow-hidden"
        }`}
      >
        {dashTabs.slice(0, 5).map((item, index) => (
          <DashTab
            name={item.name}
            Icon={item.icon}
            activeTab={"users"}
            onNavigation={() => console.log("navigation")}
            increaseDash={true}
            key={index}
          />
        ))}
      </section>
      {/* )} */}
    </section>
  );
};

export default MobileDashboard;
