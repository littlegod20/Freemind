import { TableDetailsTypes, TableTypes } from "../utils/types";

const Table: React.FC<TableTypes> = ({ tableDetails, tableTitles }) => {
  return (
    <>
      <div className="overflow-hidden rounded-lg border">
        <table className="text-sm w-full">
          <thead className="p-2 w-full ">
            <tr className="flex gap-2 p-2 justify-between">
              {tableTitles.map((item, index) => (
                <th
                  key={index}
                  className="md:w-[120px] flex justify-start bg-green-500 md:text-left w-16 text-[#1F2937] font-medium text-xs"
                >
                  <p className="truncate md:text-wrap">{item}</p>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="flex flex-col w-full text-[#6B7280]">
            {tableDetails.map((item, index) => (
              <tr
                className="flex w-full justify-between gap-2 border-t-[1px] border-gray-200 p-2 text-sm font-normal"
                key={index}
              >
                {Object.keys(item).map((key) => (
                  <td
                    key={key}
                    className="md:w-[120px] w-[60px] flex justify-start md:text-left items-center"
                  >
                    <p className="truncate">
                      {item[key as keyof TableDetailsTypes]}
                    </p>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
