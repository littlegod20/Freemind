import { Calendar } from "lucide-react";
import Inputs from "../Inputs";

const FilterByCalendar = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-2 hdx:gap-0 hdx:flex-row pt-2">
        <Inputs
          data={[{ placeholder: "From", Icon: Calendar, type:'date' }]}
          className={"rounded hdx:rounded-r-none rounded-l flex w-[240px]"}
        />
        <Inputs
          data={[{ placeholder: "To", Icon: Calendar, type: 'date' }]}
          className={"rounded hdx:rounded-l-none rounded-r flex w-[240px]"}
        />
      </div>
    </>
  );
};

export default FilterByCalendar;
