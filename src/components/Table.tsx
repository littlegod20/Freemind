import { Tooltip } from "react-tooltip";
import { TableDetailsTypes, TableTypes } from "../utils/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const specialRenderers = {
  inviteStatus: (val: string) => {
    return (
      <div
        className="bg-red-100 text-red-60 p-2 text-red-500 rounded-full"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={val}
      >
        {val.toUpperCase()}
      </div>
    );
  },
};

const Table: React.FC<TableTypes> = ({
  tableDetails,
  tableTitles,
  moreOptions,
}) => {
  const [details, setDetails] = useState(
    tableDetails.map((item) => ({ ...item, show: false }))
  );

  const navigate = useNavigate()

  const handleHidden = (id: number) => {
    setDetails((prev) =>
      prev.map((prop, index) =>
        index === id ? { ...prop, show: !prop.show } : prop
      )
    );
    console.log("details:", details);
  };

  return (
    <>
      <div className="overflow-hidden rounded-lg border shadow-inner">
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
            {details.map((item, index) => (
              <tr
                className="flex w-full justify-between gap-2 border-t-[1px] border-gray-200 p-3 sm:text-sm text-xs font-normal"
                key={index}
              >
                {Object.keys(item)
                  .filter((key) => key !== "show")
                  .map((key, keyIndex) => {
                    const value = item[key as keyof TableDetailsTypes];
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
                        {keyIndex ===
                          Object.keys(item).filter((key) => key !== "show")
                            .length -
                            1 && (
                          <div className="">
                            <span
                              className="text-black font-black cursor-pointer ml-2"
                              onClick={() => handleHidden(index)}
                            >
                              ...
                            </span>
                            {item.show ? (
                              <div className="absolute bg-white right-8 min-w-32 p-2 space-y-3 rounded-md border shadow-sm z-100">
                                {moreOptions.map((item, index) => (
                                  <>
                                    <p
                                      className="text-black cursor-pointer last:text-red-600"
                                      onClick={() =>
                                        item.path
                                          ? navigate(item.path)
                                          : console.log("no execution")
                                      }
                                      key={index}
                                    >
                                      {item.label}
                                    </p>
                                  </>
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
    </>
  );
};

export default Table;
