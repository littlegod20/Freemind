import { TabChildContentsTypes } from "@/pages/ClientPages/clientTypes";
import TabChildContents from "@/pages/ClientPages/components/TabChildContents";

const CommonTabChild = ({
  tabNumber,
  childIndex,
  modalChildren,
  staticData,
  showModal,
  setShowModal,
  children,
}: TabChildContentsTypes) => {



  return (
    <>
      {tabNumber === childIndex && (
        <TabChildContents
          modalChildren={modalChildren}
          staticData={staticData}
          showModal={showModal}
          setShowModal={setShowModal}
        >
          {children}
        </TabChildContents>
      )}
    </>
  );
};

export default CommonTabChild;
