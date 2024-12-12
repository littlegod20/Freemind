import Button from "../Button";

const Pagination = () => {
  return (
    <>
      <div className="py-3 px-4 flex justify-between items-center font-light text-sm">
        <Button title="Previous" />
        <p>Showing 3 out of 10</p>
        <Button title="Next" />
      </div>
    </>
  );
}

export default Pagination