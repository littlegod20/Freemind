export const specialRenderers = {
  inviteStatus: (val: string) => {
    return (
      <div
        className="bg-red-100 text-red-60 p-2 text-red-500 rounded-full"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={val}
      >
        {val.toUpperCase()}
      </div>
    );
  },
};
