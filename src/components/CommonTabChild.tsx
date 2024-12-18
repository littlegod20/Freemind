import { DataObjectTypes } from "@/pages/ClientPages/clientTypes";
import ClientDetailContent from "@/pages/ClientPages/components/ClientDetailContent";
import { LabelTypes, MoreOptions } from "@/utils/types";
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
  moreOptions
}: {
  data: string[] | DataObjectTypes[];
  moreOptions?: MoreOptions[];
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
          moreOptions = {moreOptions}
        >
          {children}
        </ClientDetailContent>
      )}
    </>
  );
};

export default CommonTabChild;
