import { Button } from "@/components/ui/button";
import EditContainer from "@/components/widgets/EditContainer";
import ModalWithForm from "@/components/widgets/ModalWithForm";
import React, { useState } from "react";
import { TabChildContentsTypes } from "../clientTypes";



const TabChildContents: React.FC<TabChildContentsTypes> = ({
  modalChildren,
  staticData,
  children,
  showModal,
  setShowModal,
}) => {
  const [clientAction, setClientAction] = useState("");
  
  const handleClientAction = (buttonName: string ) => {
    setClientAction(buttonName);
    if (setShowModal) {
      setShowModal(true);
    }
  };

  return (
    <>
      { staticData?.map((item, index) => (
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
                {modalChildren}
                
              </ModalWithForm>
            )}
          </>
        </div>
      ))}

      <>
      {
        children
      }
      </>
     
    </>
  );
};

export default TabChildContents;
