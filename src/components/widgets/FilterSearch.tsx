import { Search } from "lucide-react";
import FilterLabel from "../FilterLabel";
import Input from "../Input";


const FilterSearch = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <FilterLabel />
        <Input
          placeholder="Search"
          onChange={(e) => console.log(e.target.value)}
          Icon={Search}
          rotate={true}
          className={{ container: "rounded" }}
        />
      </div>
    </>
  );
}

export default FilterSearch