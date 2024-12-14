import { Button } from "../ui/button";

const Pagination = () => {
  return (
    <>
      <div className="py-3 px-4 flex justify-between items-center font-light text-sm">
        <Button className="bg-white text-black hover:bg-slate-100 border">
          Previous
        </Button>
        <p>Showing 3 out of 10</p>
        <Button className="bg-white text-black hover:bg-slate-100 border">
          Next
        </Button>
      </div>
    </>
  );
};

export default Pagination;
