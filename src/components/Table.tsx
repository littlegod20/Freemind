import { Tooltip } from "react-tooltip";
import { TableDetailsTypes, TableTypes } from "../utils/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./widgets/Pagination";
import { specialRenderers } from "@/utils/helpers";

const Table: React.FC<TableTypes> = ({
  tableDetails,
  tableTitles,
  moreOptions,
  pagination = false,
}) => {
  const [details, setDetails] = useState(
    tableDetails.map((item) => ({ ...item, show: false }))
  );

  const navigate = useNavigate();

  const handleHidden = (id: number) => {
    setDetails((prev) =>
      prev.map((prop, index) => {
        if (index === id) {
          return { ...prop, show: !prop.show };
        } else {
          return { ...prop, show: false };
        }
      })
    );
  };

  return (
    <div className="border rounded-lg w-full ">
      <div className="overflow-scroll rounded-lg border shadow-inner flex">
        <table className="text-sm w-full">
          <thead className="p-2 w-full ">
            <tr className="flex gap-2 p-2 justify-between">
              {tableTitles.map((item, index) => (
                <th
                  key={index}
                  className="md:w-[120px] flex justify-start md:text-left w-16 text-[#1F2937] font-medium text-xs"
                >
                  <p className="truncate md:text-wrap">{item}</p>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="flex flex-col w-full text-[#6B7280]">
            {details.map((detail, detailIndex) => (
              <tr
                className="flex w-full justify-between gap-2 border-t-[1px] border-gray-200 p-3 sm:text-sm text-xs font-normal"
                key={detailIndex}
              >
                {Object.keys(detail)
                  .filter((key) => key !== "show")
                  .map((key, keyDetailIndex) => {
                    const value = detail[key as keyof TableDetailsTypes];
                    const SpecialRenderer =
                      specialRenderers[key as keyof typeof specialRenderers];
                    return (
                      <td
                        key={key}
                        className={`md:w-[120px] w-[60px] flex justify-between md:text-left items-center`}
                      >
                        {SpecialRenderer ? (
                          SpecialRenderer(value as string)
                        ) : (
                          <p
                            className="truncate text-center"
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={value}
                          >
                            {value}
                          </p>
                        )}
                        {keyDetailIndex ===
                          Object.keys(detail).filter((key) => key !== "show")
                            .length -
                            1 && (
                          <div className="">
                            <span
                              className={`text-black font-black cursor-pointer ml-2 ${
                                detail.show ? "text-green-active" : ""
                              }`}
                              onClick={() => handleHidden(detailIndex)}
                            >
                              ...
                            </span>
                            {detail.show ? (
                              <div className="absolute bg-white right-8 min-w-32 p-2 space-y-3 rounded-md border shadow-sm z-100">
                                {moreOptions.map((option, optionIndex) => (
                                  <p
                                    className="text-black cursor-pointer last:text-red-600"
                                    onClick={() =>
                                      option.path
                                        ? navigate(
                                            `${option.path}/${detail.name}`
                                          )
                                        : option.action
                                        ? option.action()
                                        : console.log("no executoin")
                                    }
                                    key={optionIndex}
                                  >
                                    {option.label}
                                  </p>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        )}
                        <Tooltip id="my-tooltip" />
                      </td>
                    );
                  })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pagination ? <Pagination /> : null}
    </div>
  );
};

export default Table;
