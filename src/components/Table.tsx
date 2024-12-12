import { Tooltip } from "react-tooltip";
import { TableDetailsTypes, TableTypes } from "../utils/types";
import { useState } from "react";

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

const Table: React.FC<TableTypes> = ({ tableDetails, tableTitles }) => {
  const [show, setShow] = useState(false);

  const handleHidden = () => {
    setShow(!show);
    console.log("show:", show);
  };

  return (
    <>
      <div className="overflow-hidden rounded-lg border">
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
            {tableDetails.map((item, index) => (
              <tr
                className="flex w-full justify-between gap-2 border-t-[1px] border-gray-200 p-3 sm:text-sm text-xs font-normal"
                key={index}
              >
                {Object.keys(item).map((key, keyIndex) => {
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
                      {keyIndex === Object.keys(item).length - 1 && (
                        <>
                          <span
                            className="text-black font-black cursor-pointer ml-2"
                            onClick={handleHidden}
                          >
                            ...
                          </span>
                          {show && keyIndex === Number(key) ? (
                            <div className="absolute">
                              <p>Edit user</p>
                              <p>Remove access</p>
                            </div>
                          ) : null}
                        </>
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
