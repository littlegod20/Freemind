import { TableDetailsTypes } from "../utils/types";
import Button from "./Button";

type AvatarProps = Pick<TableDetailsTypes, "email" | "name">;

const AvatarDetail = ({ name, email }: AvatarProps) => {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row justify-between">
        <div className="flex items-center gap-2 p-2">
          <p>Avatar</p>
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-slate-500 text-xs font-light"> {email} </p>
          </div>
        </div>
        <div className="flex w-full justify-end pt-3 sm:pt-0">
          <Button
            title="Edit user details"
            className="bg-green-active text-white border-0 shadow-inner hover:bg-green-700"
          />
        </div>
      </div>
    </>
  );
};

export default AvatarDetail;
