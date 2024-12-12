const Button = ({ title }: { title: string }) => {
  return (
    <>
      <button className="border p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in">
        {title}
      </button>
    </>
  );
};

export default Button;
