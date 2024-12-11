import { ListFilter } from "lucide-react";

const FilterLabel = () => {
  return (
    <div className="flex items-center gap-3 rounded hover:bg-[#F9FAFB] p-2 cursor-pointer">
      <ListFilter />
      <p>Filters</p>
    </div>
  );
};

export default FilterLabel;
