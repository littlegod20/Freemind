interface ButtonTypes {
  title: string;
  className?: string;
}

const Button: React.FC<ButtonTypes> = ({ title, className }) => {
  return (
    <>
      <button
        className={`border py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in ${
          className || ""
        }`}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
