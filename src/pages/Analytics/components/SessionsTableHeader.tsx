import Inputs from "@/components/Inputs";
const SessionsTableHeader = () => {
  return (
    <>
      <header className="flex justify-between items-center">
        <p className="w-[104px] sm:w-full font-bold text-sm sm:text-xl">
          Total sessions / user
        </p>
        <Inputs
          data={[{ placeholder: "All users", options: ["option1", "option2"] }]}
          type="select"
          className="w-44 font-normal"
          defaultSelect={false}
        />
      </header>
    </>
  );
};

export default SessionsTableHeader;
