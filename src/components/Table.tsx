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
  titlesClassName = "",
  detailsClassName = "",
  tableClassName = "",
  overAllContainerClassName = "",
}) => {
  const [details, setDetails] = useState(
    tableDetails ? tableDetails.map((item) => ({ ...item, show: false })) : null
  );

  const navigate = useNavigate();

  const handleHidden = (id: number) => {
    setDetails((prev) =>
      prev
        ? prev.map((prop, index) => {
            if (index === id) {
              return { ...prop, show: !prop.show };
            } else {
              return { ...prop, show: false };
            }
          })
        : null
    );
  };

  return (
    <div
      className={` w-full ${
        overAllContainerClassName
          ? overAllContainerClassName
          : "rounded-lg border"
      } `}
    >
      <div
        className={`overflow-scroll   flex ${
          tableClassName ? tableClassName : "rounded-lg border shadow-inner"
        }`}
      >
        <table className="text-sm w-full">
          <thead className="p-2 w-full ">
            <tr className="flex gap-2 p-2 justify-between">
              {tableTitles.map((item, index) => (
                <th
                  key={index}
                  className={` flex justify-start md:text-left text-[#1F2937] font-medium text-xs ${
                    titlesClassName ? titlesClassName : "md:w-[120px] w-16"
                  }`}
                >
                  <p className="truncate md:text-wrap">{item}</p>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="flex flex-col w-full text-[#6B7280]">
            {details ? (
              details.map((detail, detailIndex) => (
                <tr
                  className="flex w-full justify-between gap-2 border-t-[1px] border-gray-200 p-2 sm:text-sm text-xs font-normal"
                  key={detailIndex}
                >
                  {Object.keys(detail)
                    .filter((key) => key !== "show" && key !== "id")
                    .map((key, keyDetailIndex) => {
                      const value = detail[key as keyof TableDetailsTypes];
                      const SpecialRenderer =
                        specialRenderers[key as keyof typeof specialRenderers];
                      return (
                        <td
                          key={key}
                          className={` flex justify-between md:text-left items-center ${
                            detailsClassName
                              ? detailsClassName
                              : "md:w-[120px] w-[60px]"
                          }`}
                        >
                          {SpecialRenderer ? (
                            SpecialRenderer(value as string)
                          ) : (
                            <p
                              className="truncate text-center"
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content={value as string}
                            >
                              {value as string}
                            </p>
                          )}
                          {moreOptions &&
                            keyDetailIndex ===
                              Object.keys(detail).filter(
                                (key) => key !== "show" && key !== 'id'
                              ).length -
                                1 && (
                              <div
                                className="cursor-pointer"
                                onClick={() => handleHidden(detailIndex)}
                              >
                                <span
                                  className={`text-black font-black  ml-2 ${
                                    detail.show ? "text-green-active" : ""
                                  }`}
                                >
                                  ...
                                </span>
                                {detail.show ? (
                                  <div className="absolute bg-white right-8 min-w-32 p-2 space-y-3 rounded-md border shadow-sm z-100">
                                    {moreOptions &&
                                      moreOptions.map((option, optionIndex) => (
                                        <p
                                          className="text-black cursor-pointer last:text-red-600"
                                          onClick={() =>
                                            option.path
                                              ? navigate(
                                                  `${option.path}/${detail.id}`
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
              ))
            ) : (
              <tr className="flex w-full justify-between gap-2 border-t-[1px] border-gray-200 p-2 sm:text-sm text-xs font-normal">
                <td className="flex justify-between md:text-left items-center">
                  <p className="truncate text-center">No data</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {pagination ? <Pagination /> : null}
    </div>
  );
};

export default Table;
