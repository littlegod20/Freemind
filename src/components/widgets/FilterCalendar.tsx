import { Calendar } from "lucide-react";
import Input from "../Input";

const FilterCalendar = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-2 hdx:flex-row  pt-2">
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

export default FilterCalendar;
