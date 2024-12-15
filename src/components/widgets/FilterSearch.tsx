import { Search } from "lucide-react";
import FilterLabel from "../FilterLabel";
import Inputs from "../Inputs";

const FilterSearch = () => {
  return (
    <>
      <div className="flex items-center gap-2 flex-wrap">
        <FilterLabel />
        <Inputs data={[{ placeholder: "Search" }]} Icon={Search} />
      </div>
    </>
  );
};

export default FilterSearch;
