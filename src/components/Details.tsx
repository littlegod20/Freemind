import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { DetailsTypes } from "../utils/types";

const Details: React.FC<DetailsTypes> = ({
  statics,
  details,
  slice1,
  slice2,
  modified = false,
}) => {
  return (
    <>
      <div className="w-full border rounded-lg p-3">
        <div className="sm:w-4/5 md:w-1/2 flex  justify-between">
          <div className="space-y-4">
            {statics.slice(slice1, slice2).map((item, index) => (
              <p key={index} className={`w-32 sm:w-56 truncate`}>
                {item}
              </p>
            ))}
          </div>
          <div className="space-y-4">
            {details
              ? Object.values(details)
                  .slice(slice1, slice2)
                  .map((item, index) =>
                    modified ? (
                      <div
                        className="text-slate-500 font-light w-32 truncate sm:w-64 "
                        key={index}
                      >
                        {typeof item === "string" ? (
                          <p>

                            {item}
                          </p>
                        ) : typeof item === "object" ? (
                          <div className="flex items-center gap-2">
                            <Avatar className="py-3">
                              <AvatarImage src={""} />
                              <AvatarFallback className="bg-green-300 px-4 py-3 rounded-full bg-opacity-50 font-bold text-green-900 text-xl">
                                {item.name?.split("")[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-black font-medium text-base">
                                {" "}
                                {item.name}{" "}
                              </p>
                              <p className="text-green-active text-sm">
                                {" "}
                                {item.role}{" "}
                              </p>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      <p
                        key={index}
                        className="text-slate-500 font-light w-32 truncate sm:w-64 "
                      >
                        {" "}
                        {item}{" "}
                      </p>
                    )
                  )
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
