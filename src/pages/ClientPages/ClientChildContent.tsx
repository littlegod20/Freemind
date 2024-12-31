import AvatarContainer from "@/components/AvatarContainer";
import { isDataListType } from "@/utils/helpers";
import { DataObjectTypes } from "./clientTypes";
import { useState } from "react";
import { LucideIcon } from "lucide-react";

const ClientChildContent = ({
  data,
  border = true,
  moreOptions,
}: {
  data: DataObjectTypes[] | string[];
  border?: boolean;
  moreOptions?: { label: string; action: () => void; Icon?: LucideIcon }[];
}) => {
  const [more, setMore] = useState(false);
  const [optionIndex, setOptionIndex] = useState(0);

  const handleClickMore = (val: string, optionIndex: number) => {
    setMore(!more);
    setOptionIndex(optionIndex);
    console.log("mor:", val);
  };

  return (
    <>
      <div className="space-y-3 pt-4">
        {data && (
          data.map((item: DataObjectTypes | string, index: number) => (
            <div
              className={`w-full ${
                border ? "border" : ""
              } justify-between flex p-2 rounded-md items-center gap-3 hover:bg-gray-100`}
              key={index}
            >
              {typeof item === "string" ? (
                <div>
                  <p className="text-sm"> {item}</p>
                </div>
              ) : (
                <>
                  {!item.appStatus && (
                    <AvatarContainer title={item.name} image={""} />
                  )}
                  <div className=" w-full flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-base font-medium"> {item.name} </p>
                      {item.appStatus ? (
                        <p className="text-sm text-slate-500">
                          {" "}
                          {item.appDate}{" "}
                        </p>
                      ) : (
                        <p className="text-green-active text-sm">{item.role}</p>
                      )}
                    </div>
                    {item.appStatus && (
                      <p className="text-sm p-2 bg-[#E8F5E9] rounded-md text-[#4CAF50]">
                        {item.appStatus}
                      </p>
                    )}
                  </div>
                </>
              )}

              <div className="flex flex-col relative">
                <p
                  className="font-black cursor-pointer"
                  onClick={() =>
                    handleClickMore(
                      isDataListType(item) ? item : item.name,
                      index
                    )
                  }
                >
                  ...
                </p>
                <div className="absolute min-w-77 right-full top-7 bg-white z-50 rounded-md  gap-1 flex flex-col shadow-md">
                  {more &&
                    optionIndex === Object.values(data).indexOf(item) &&
                    moreOptions?.map((option, indexOption) => (
                      <p
                        className={`p-2 text-nowrap transition-all duration-300 ease-out hover:bg-slate-200 rounded-md cursor-pointer flex gap-2 items-center ${
                          /delete|remove/i.test(option.label)
                            ? "text-red-600"
                            : ""
                        }`}
                        key={indexOption}
                        onClick={option.action}
                      >
                        <span>
                          {option.Icon ? <option.Icon size={20} /> : ""}
                        </span>
                        {option.label}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ClientChildContent;
