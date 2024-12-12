import { ReactElement } from "react";
interface HeaderTypes {
  title: string;
  description: string;
  Button?: ReactElement;
}

const Header: React.FC<HeaderTypes> = ({ title, description, Button }) => {
  return (
    <div className="border-slate-200 border-b-2 pb-8  w-full flex justify-between">
      <header className="">
        <h4 className="text-dark-blue">{title.capitalize()}</h4>
        <p className="font-light text-sm text-slate-500">{description}</p>
      </header>
      {Button}
    </div>
  );
};

export default Header;
