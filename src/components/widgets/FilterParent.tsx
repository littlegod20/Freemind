import FilterCalendar from "./FilterCalendar";
import FilterSearch from "./FilterSearch";

const FilterParent = () => {
  return (
    <div className="flex flex-col md:flex-row sm:justify-between">
      <FilterSearch />
      <FilterCalendar />
    </div>
  );
};

export default FilterParent;
