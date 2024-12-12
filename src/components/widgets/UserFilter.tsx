import { Calendar, Search } from "lucide-react";
import FilterLabel from "../FilterLabel";
import Input from "../Input";

const UserFilter = () => {
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
      <div className="flex flex-col items-start gap-2 md:gap-0 md:flex-row pt-2">
        <Input
          placeholder="From"
          Icon={Calendar}
          onChange={(e) => console.log(e.target.value)}
          className={{ container: "rounded md:rounded-r-none rounded-l" }}
        />
        <Input
          placeholder="To"
          Icon={Calendar}
          onChange={(e) => console.log(e.target.value)}
          className={{ container: "rounded md:rounded-l-none rounded-r" }}
        />
      </div>
    </>
  );
};

export default UserFilter;
