import { HeaderTypes } from "./Header";

type ActionTypes = Partial<HeaderTypes>;

const Action: React.FC<ActionTypes> = ({ title, description, Button }) => {
  return (
    <>
      <div className="flex justify-between p-5 border rounded-lg items-center">
        <div>
          <p className="text-sm font-bold">{title}</p>
          <p className="text-xs font-light text-slate-500">{description}</p>
        </div>
        {Button}
      </div>
    </>
  );
};

export default Action;
