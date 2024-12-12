
interface HeaderTypes{
  title:string;
  description:string;
}

const Header:React.FC<HeaderTypes> = ({title, description}) => {
  return (
    <>
      <header className=" border-slate-200 border-b-2 pb-8  w-full">
        <h4 className="text-dark-blue">{title}</h4>
        <p className="font-light text-sm text-slate-500">
          {description}
        </p>
      </header>
    </>
  );
}

export default Header