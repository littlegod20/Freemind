import { EditContainerTypes } from "@/utils/types";
import AvatarContainer from "../AvatarContainer";

const EditContainer = ({
  title,
  description,
  image,
  Button,
  isUser = false,
  border = false,
  titleClassName,
}: EditContainerTypes) => {
  return (
    <>
      <div
        className={`w-full flex flex-col sm:flex-row justify-between items-center ${
          border ? "border rounded-lg p-2" : ""
        }`}
      >
        <div className="flex items-center gap-3 p-2 w-full sm:w-[80%]">
          {isUser ? <AvatarContainer title={title} image={image} /> : null}
          <div className="flex-1 ">
            <p className={`font-bold ${titleClassName}`}>{title}</p>
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
