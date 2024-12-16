import { Calendar } from "lucide-react";
import Inputs from "../Inputs";

const FilterCalendar = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-2 hdx:gap-0 hdx:flex-row pt-2">
        <Inputs
          data={[{ placeholder: "From", Icon: Calendar }]}
          className={"rounded hdx:rounded-r-none rounded-l"}
        />
        <Inputs
          data={[{ placeholder: "To", Icon: Calendar }]}
          className={"rounded hdx:rounded-l-none rounded-r"}
        />
      </div>
    </>
  );
};

export default FilterCalendar;
