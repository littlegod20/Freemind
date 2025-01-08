import { ListFilter, Search } from "lucide-react";
import Inputs from "../Inputs";
import { lazy, useState } from "react";
import { LabelTypes } from "@/utils/types";

const CardWithForm = lazy(() => import("./CardWithForm"));

const FilterSearch = ({ filterInfo }: { filterInfo: LabelTypes[] }) => {
  const [filter, setFilter] = useState(false);

  const handleFilterShow = () => {
    setFilter(!filter);
  };
  return (
    <>
      <div className="flex items-center gap-2 flex-wrap">
        {/* filter lable */}
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
              <Inputs data={filterInfo} type="select" defaultSelect={false} />
            </CardWithForm>
          ) : null}
        </section>

        {/* search input */}
        <Inputs data={[{ placeholder: "Search", Icon: Search }]} />
      </div>
    </>
  );
};

export default FilterSearch;
