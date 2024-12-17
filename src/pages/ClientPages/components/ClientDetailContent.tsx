import AvatarContainer from "@/components/AvatarContainer";
import { Button } from "@/components/ui/button";
import EditContainer from "@/components/widgets/EditContainer";
import ModalWithForm from "@/components/widgets/ModalWithForm";
import { LabelTypes } from "@/utils/types";
import React, { useState } from "react";

interface ClientCommonTabDetailTypes {
  data:
    | string[]
    | { name: string; role?: string; appStatus?: string; appDate?: string }[];
  border?: boolean;
  staticData?: LabelTypes[];
  children?: React.ReactNode;
  showModal?: boolean;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClientCommonTabDetail: React.FC<ClientCommonTabDetailTypes> = ({
  data,
  border = true,
  staticData,
  children,
  showModal,
  setShowModal,
}) => {
  const [clientAction, setClientAction] = useState("");

  const handleClientAction = (buttonName: string) => {
    setClientAction(buttonName);
    if (setShowModal) {
      setShowModal(true);
    }
  };
  return (
    <>
      {staticData?.map((item, index) => (
        <div className="" key={index}>
          <>
            <div className="pt-4">
              {item.title && (
                <EditContainer
                  title={item.title}
                  titleClassName="text-xl"
                  Button={
                    <Button
                      className="font-light"
                      onClick={() => {
                        handleClientAction(item.buttonName as string);
                        console.log(item.buttonName);
                      }}
                    >
                      {item.buttonName}
                    </Button>
                  }
                />
              )}
            </div>
            {clientAction === item.buttonName && showModal && (
              <ModalWithForm
                title={item?.modalDetails?.title ?? undefined}
                description={item?.modalDetails?.description ?? undefined}
                onCancel={() =>
                  item.modalDetails?.buttonTitles?.[0]?.action?.() ?? undefined
                }
                buttonTitles={item?.modalDetails?.buttonTitles ?? undefined}
              >
                {children}
              </ModalWithForm>
            )}
          </>
        </div>
      ))}
      <div className="space-y-3 pt-4">
        {data.map((item, index) => (
          <div
            className={`w-full ${
              border ? "border" : ""
            } justify-between flex p-2 rounded-md items-center gap-3 hover:bg-gray-100`}
            key={index}
          >
            {typeof item === "string" ? (
              <div>
                <p className="text-sm"> {item}</p>
              </div>
            ) : typeof item === "object" ? (
              <>
                {!item.appStatus && (
                  <AvatarContainer title={item.name} image={""} />
                )}
                <div className=" w-full flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-base font-medium"> {item.name} </p>
                    {item.appStatus ? (
                      <p className="text-sm text-slate-500"> {item.appDate} </p>
                    ) : (
                      <p className="text-green-active text-sm">{item.role}</p>
                    )}
                  </div>
                  {item.appStatus && (
                    <p className="text-sm p-2 bg-[#E8F5E9] rounded-md text-[#4CAF50]">
                      {item.appStatus}
                    </p>
                  )}
                </div>
              </>
            ) : null}

            <p
              className="font-black cursor-pointer"
              onClick={() => console.log("")}
            >
              ...
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ClientCommonTabDetail;
