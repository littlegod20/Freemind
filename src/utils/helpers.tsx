import {
  DataObjectTypes,
} from "@/pages/ClientPages/clientTypes";

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

export const hashCode = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash % 360;
};

export const intoHSL = (hash: number) => {
  return `hsl(${hash}, 70%, 90%)`;
};

export function isDataListType(item: string | DataObjectTypes): item is string {
  return typeof item === "string";
}

