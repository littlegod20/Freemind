import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { TableDetailsTypes } from "../utils/types";
import { ReactElement } from "react";

interface AvatarProps extends TableDetailsTypes {
  image?: string;
  Button?: ReactElement;
}

const AvatarDetail = ({ name, email, image, Button }: AvatarProps) => {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row justify-between">
        <div className="flex items-center gap-3 p-2">
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback className="bg-green-300 px-4 py-3 rounded-full bg-opacity-50 font-bold text-green-900 text-xl">
              {name?.split("")[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-slate-500 text-xs font-light"> {email} </p>
          </div>
        </div>
        <div className="flex w-full justify-end pt-3 sm:pt-0">{Button}</div>
      </div>
    </>
  );
};

export default AvatarDetail;
