import AvatarContainer from "@/components/AvatarContainer";

interface ClientDetailContentTypes {
  data:
    | string[]
    | { name: string; role?: string; appStatus?: string; appDate?: string }[];
  border?: boolean;
}

const ClientDetailContent: React.FC<ClientDetailContentTypes> = ({
  data,
  border = true,
}) => {
  return (
    <div className="space-y-3 pt-4">
      {data.map((item, index) => (
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
          ) : typeof item === "object" ? (
            <>
              {!item.appStatus && (
                <AvatarContainer title={item.name} image={""} />
              )}
              <div className=" w-full flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-base font-medium"> {item.name} </p>
                  {item.appStatus ? (
                    <p className="text-sm text-slate-500"> {item.appDate} </p>
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
          ) : null}

          <p
            className="font-black cursor-pointer"
            onClick={() => console.log("")}
          >
            ...
          </p>
        </div>
      ))}
    </div>
  );
};

export default ClientDetailContent;
