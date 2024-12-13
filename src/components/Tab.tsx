import { LucideIcon } from "lucide-react";
import { Tooltip } from "react-tooltip";

interface TabStyles {
  name: string;
  Icon: LucideIcon;
  activeTab: string;
  onNavigation: (val: string) => void;
}

const Tab: React.FC<TabStyles> = ({ Icon, name, activeTab, onNavigation }) => {
  return (
    <>
      <div
        className={`flex items-center gap-4 py-3 cursor-pointer hover:text-green-active ${
          activeTab === name.toLowerCase() ? "text-green-active" : ""
        }`}
        onClick={() => onNavigation(name.toLowerCase())}
        data-tooltip-id="my-tooltip"
        data-tooltip-content={name}
      >
        <Icon size={20} />
        <p className="hidden md:block">{name}</p>
        <Tooltip id="my-tooltip" className="md:hidden"/>
      </div>
    </>
  );
};

export default Tab;
