import { LabelTypes } from "@/utils/types";
import FilterSearch from "./FilterSearch";
import FilterByCalendar from "./FilterByCalendar";

const FilterParent = ({ filterOptions }: { filterOptions: LabelTypes[] }) => {
  return (
    <div className="flex flex-col hdx:flex-row sm:justify-between">
      <FilterSearch filterInfo={filterOptions} />
      <FilterByCalendar />
    </div>
  );
};

export default FilterParent;
