import { LabelTypes } from "@/utils/types";
import FilterCalendar from "./FilterCalendar";
import FilterSearch from "./FilterSearch";

const FilterParent = ({ filterOptions }: { filterOptions: LabelTypes[] }) => {
  return (
    <div className="flex flex-col hdx:flex-row sm:justify-between">
      <FilterSearch filterInfo={filterOptions} />
      <FilterCalendar />
    </div>
  );
};

export default FilterParent;
