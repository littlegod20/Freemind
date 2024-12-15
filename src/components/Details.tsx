import { DetailsTypes } from "../utils/types";

const Details: React.FC<DetailsTypes> = ({
  statics,
  details,
  slice1,
  slice2,
}) => {
  return (
    <>
      <div className="w-full border rounded-lg p-3">
        <div className="sm:w-4/5 md:w-1/2 flex  justify-between">
          <div className="space-y-4">
            {statics.slice(slice1, slice2).map((item, index) => (
              <p key={index} className=" w-32 sm:w-56 truncate">
                {item}
              </p>
            ))}
          </div>
          <div className="space-y-4">
            {details
              ? Object.values(details)
                  .slice(slice1, slice2)
                  .map((item, index) => (
                    <p
                      key={index}
                      className="text-slate-500 font-light w-32 truncate sm:w-64 "
                    >
                      {" "}
                      {item}{" "}
                    </p>
                  ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
