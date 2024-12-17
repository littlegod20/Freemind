import ClientDetailContent from "@/pages/ClientPages/components/ClientDetailContent";
import { LabelTypes } from "@/utils/types";
import React from "react";

const CommonTabChild = ({
  tabNumber,
  childIndex,
  data,
  border = true,
  staticData,
  showModal,
  setShowModal,
  children,
}: {
  data:
    | string[]
    | { name: string; role?: string; appStatus?: string; appDate?: string }[];
  border?: boolean;
  tabNumber: number;
  childIndex: number;
  staticData?: LabelTypes[];
  children?: React.ReactNode;
  showModal?: boolean;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {tabNumber === childIndex && (
        <ClientDetailContent
          data={data}
          border={border}
          staticData={staticData}
          showModal={showModal}
          setShowModal={setShowModal}
        >
          {children}
        </ClientDetailContent>
      )}
    </>
  );
};

export default CommonTabChild;
