import { TabStyles } from "@/utils/types";
import { Tooltip } from "react-tooltip";

const DashTab: React.FC<TabStyles> = ({
  Icon,
  name,
  activeTab,
  increaseDash,
  onNavigation,
}) => {
  return (
    <>
      <div
        className={`flex gap-4 py-3 cursor-pointer hover:text-green-active ${
          increaseDash ? "md:items-center" : "md:justify-center"
        } ${activeTab === name.toLowerCase() ? "text-green-active" : ""}`}
        onClick={() => onNavigation(name.toLowerCase())}
        data-tooltip-id="my-tooltip"
        data-tooltip-content={name}
      >
        <Icon size={20} />
        <p className={` ${increaseDash  ? 'flex': 'hidden'} `}>{name}</p>
        <Tooltip id="my-tooltip" className="md:hidden" />
      </div>
    </>
  );
};

export default DashTab;
