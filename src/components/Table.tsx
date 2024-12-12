import { tableDetails, tableTitles } from "../utils/constants";

const Table = () => {
  return (
    <>
      <div className="overflow-hidden rounded-lg border">
        <table className="text-sm w-full">
          <thead className="p-2 w-full ">
            <tr className="grid grid-cols-9 gap-2 p-2">
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
          <tbody className=" flex w-full text-[#6B7280]">
            <tr className="w-full">
              {tableDetails.map((item, index) => (
                <div
                  key={index}
                  className="flex w-full justify-between gap-2 border-t-[1px] border-gray-200 p-2 text-sm font-normal"
                >
                  <td className="md:w-[120px] w-[60px] flex justify-start md:text-left  items-center">
                    <p className="truncate">{item.name}</p>
                  </td>
                  <td className="md:w-[120px] flex justify-start md:text-left items-center w-16 text-no-wrap">
                    <p className="truncate">{item.role}</p>
                  </td>
                  <td className="md:w-[120px] flex justify-start md:text-left items-center w-14">
                    <p className="truncate">{item.joined}</p>
                  </td>
                  <td className="md:w-[120px] flex justify-start md:text-left items-center w-16">
                    <p className="truncate">{item.lastLogged}</p>
                  </td>
                  <td className="md:w-[120px] flex justify-start md:text-left items-center w-16">
                    <p className="truncate">{item.aiTokensUsed}</p>
                  </td>
                  <td className="md:w-[120px] flex justify-start md:text-left items-center w-16">
                    <p className="truncate">{item.aiTokensSessions}</p>
                  </td>
                  <td className="md:w-[120px] flex justify-start md:text-left items-center w-16">
                    <p className="truncate">{item.palmTokensUsed}</p>
                  </td>
                  <td className="md:w-[120px] flex justify-start md:text-left items-center w-16">
                    <p className="truncate">{item.palmSessions}</p>
                  </td>
                  <td className="md:w-[120px] flex justify-start md:text-left items-center w-16">
                    <p className="truncate">{item.limitCall}</p>
                  </td>
                </div>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
