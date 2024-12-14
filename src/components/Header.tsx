import { ArrowLeft } from "lucide-react";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";


export interface HeaderTypes {
  title: string;
  description: string;
  Button?: ReactElement;
  back?: boolean;
}

const Header: React.FC<HeaderTypes> = ({
  title,
  description,
  Button,
  back = false,
}) => {
  const navigate = useNavigate();
  return (
    <div className="border-slate-200 border-b-2 pb-8  w-full flex sm:justify-between sm:flex-row flex-col">
      <div className="flex items-center gap-2 w-[80%]">
        {back ? (
          <ArrowLeft
            className="text-slate-500 cursor-pointer"
            onClick={() => navigate(-1)}
          />
        ) : null}
        <header className="">
          <h4 className="text-dark-blue">{title.capitalize()}</h4>
          <p className="font-light text-xs sm:text-sm text-slate-500">
            {description}
          </p>
        </header>
      </div>
      <div className="pt-4 sm:pt-0 flex justify-end">{Button}</div>
    </div>
  );
};

export default Header;
