import { EditContainerTypes } from "@/utils/types";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const EditContainer = ({
  title,
  description,
  image,
  Button,
  isUser = false,
  border = false,
}: EditContainerTypes) => {
  return (
    <>
      <div
        className={`w-full flex flex-col sm:flex-row justify-between items-center ${
          border ? "border rounded-lg p-2" : ""
        }`}
      >
        <div className="flex items-center gap-3 p-2 w-full sm:w-[80%]">
          {isUser ? (
            <Avatar>
              <AvatarImage src={image} />
              <AvatarFallback className="bg-green-300 px-4 py-3 rounded-full bg-opacity-50 font-bold text-green-900 text-xl">
                {title?.split("")[0]}
              </AvatarFallback>
            </Avatar>
          ) : null}
          <div className="flex-1 ">
            <p className="font-bold">{title}</p>
            <p className="text-slate-500 text-xs font-light"> {description} </p>
          </div>
        </div>
        <div className="flex w-full sm:w-[10%] justify-end pt-3 sm:pt-0">
          {Button}
        </div>
      </div>
    </>
  );
};

export default EditContainer;
