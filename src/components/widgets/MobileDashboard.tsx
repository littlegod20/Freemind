import { Menu } from "lucide-react";
import { useState } from "react";

const MobileDashboard = () => {
  const [showDash, setShowDash] = useState(false);

  const handleShowDash = () => {
    setShowDash(!showDash);
  };
  return (
    <section className="md:hidden relative">
      <div className="pl-4 pt-4">
        <Menu
          onClick={handleShowDash}
          className="transition-all hover:scale-110 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          size={40}
        />
      </div>
      {showDash && (
        <section className="absolute top-1/2">
          <p>Menu</p>
        </section>
      )}
    </section>
  );
};

export default MobileDashboard;
