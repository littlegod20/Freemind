import { LucideIcon } from "lucide-react";

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
      >
        <Icon size={20} />
        <p className="hidden sm:block">{name}</p>
      </div>
    </>
  );
};

export default Tab;
