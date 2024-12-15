import { ListFilter } from "lucide-react";
import { useState } from "react";
import Inputs from "./Inputs";
import { CardWithForm } from "./widgets/CardWithForm";

const FilterLabel = () => {
  const [filter, setFilter] = useState(false);

  const handleFilterShow = () => {
    setFilter(!filter);
  };

  return (
    <section
      className={`flex items-center rounded  hover:bg-gray-100 font-light relative `}
    >
      <div
        className={`flex gap-3 p-2 rounded cursor-pointer ${
          filter ? "bg-green-100 bg-opacity-70" : ""
        }`}
        onClick={handleFilterShow}
      >
        <ListFilter />
        <p>Filters</p>
      </div>
      {filter ? (
        <CardWithForm
          className="sm:w-64 absolute top-full z-50 left-0 pt-4 mt-2"
          buttonTitles={[{ label: "Reset" }, { label: "Filter" }]}
          buttonLayout="between"
        >
          <Inputs
            data={[{ label: "Role", placeholder: "Choose a role", options:["General User", "Strategist", "Consultant"]}]}
            type="select"
            defaultSelect={false}
          />
        </CardWithForm>
      ) : null}
    </section>
  );
};

export default FilterLabel;
