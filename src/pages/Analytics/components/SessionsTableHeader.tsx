import Inputs from '@/components/Inputs';
const SessionsTableHeader = () => {
  return (
    <>
      <header className="font-bold text-xl flex justify-between items-center">
        Total sessions / user
        <div className="font-normal">
          <Inputs
            data={[
              { placeholder: "All users", options: ["option1", "option2"] },
            ]}
            type="select"
            className="w-44"
            defaultSelect={false}
          />
        </div>
      </header>
    </>
  );
}

export default SessionsTableHeader