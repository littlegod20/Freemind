import CommonTabChild from "@/components/CommonTabChild";
import Details from "@/components/Details";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import CommonTab from "@/components/widgets/CommonTab";
import EditContainer from "@/components/widgets/EditContainer";
import { clientDetailStatics, data } from "@/utils/constants";
import { ClientDetailsTypes } from "@/utils/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientDetailContent from "./components/ClientDetailContent";
import { clientTabs } from "./clientData";
import { useAction } from "@/hooks/useAction";
import ModalWithForm from "@/components/widgets/ModalWithForm";
import ClientEditInputs from "./components/ClientEditInputs";

const dets = [
  {
    slice1: 0,
    slice2: 2,
  },
  {
    slice1: 2,
    slice2: 5,
  },
  {
    slice1: 5,
    slice2: 6,
  },
  {
    slice1: 6,
    modified: true,
  },
];

const ClientDetails = () => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState<ClientDetailsTypes | null>(null);
  const [childIndex, setChildIndex] = useState(0);
  const [tabData, setTabData] = useState(clientTabs);

  const { onClose, close } = useAction();

  const handleClientTab = (tabLabel: string, indexChild: number) => {
    setTabData((prev) =>
      prev.map((item) =>
        item.label === tabLabel
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
    setChildIndex(indexChild);
    console.log("childIndex:", indexChild);
  };

  useEffect(() => {
    if (id === "Alex Johnson") {
      setUserDetail({
        companyName: "Jobmanor",
        contractExp: "8/21/15",
        contactName: "Alex Johnson",
        email: "alex.johnson@emailprovider.com",
        phoneNo: "+ 1 (726) 202-2022",
        website: "https://thejobmanor.com/",
        firstLogged: "8/21/15",
        lastLogged: "8/21/15",
        lastUpdate: "8/21/15",
        modifiedBy: { name: "Alex", role: "Strategist" },
      });
    }
  }, [id]);
  return (
    <main className="">
      <Header title="Client Details" description="" back={true} />
      <div className="flex flex-col hdx:flex-row gap-10">
        <section className="space-y-5 hdx:w-1/2 pt-8">
          <EditContainer
            isUser={true}
            title="Company name"
            Button={<Button onClick={onClose}>Edit client details</Button>}
          />
          {dets.map((item, index) => (
            <Details
              statics={clientDetailStatics}
              details={userDetail}
              slice1={item.slice1}
              slice2={item.slice2}
              key={index}
              modified={item.modified}
            />
          ))}
          <EditContainer
            title="Delete User"
            description="Deleting this user is permanent and cannot be undone."
            Button={
              <Button
                className="text-red-600 font-light hover:bg-red-100 hover:text-red-600"
                variant="ghost"
              >
                Delete Client
              </Button>
            }
            border={true}
          />
        </section>
        <section className="hdx:w-1/2 border-l-[1px] md:pt-8">
          <CommonTab tabData={tabData} onClickTab={handleClientTab}>
            <CommonTabChild tabNumber={0} childIndex={childIndex}>
              <ClientDetailContent
                data={[
                  "Inflamatory and fibrotic indications",
                  "ALS (Amyotrophic Lateral Sclerosis)",
                  "Neurotherapeutic Agent Characterization",
                  "Innovation Grants to Nurture Initial Translational Efforts (IGNITE)",
                ]}
              />
            </CommonTabChild>
            <CommonTabChild tabNumber={1} childIndex={childIndex}>
              <ClientDetailContent
                data={[
                  {
                    name: "Me",
                    role: "General user",
                    appDate: "Application date",
                    appStatus: "Application status",
                  },
                ]}
              />
            </CommonTabChild>

            <CommonTabChild tabNumber={2} childIndex={childIndex}>
              <ClientDetailContent
                data={[
                  {
                    name: "Me",
                    role: "General user",
                  },
                  {
                    name: "John Doe",
                    role: "General user",
                  },
                ]}
                border={false}
              />
            </CommonTabChild>
          </CommonTab>
        </section>
      </div>

      {close && (
        <ModalWithForm
          title="Edit client"
          cancelButton={true}
          buttonTitles={[
            { label: "Cancel", action: onClose },
            { label: "Save changes" },
          ]}
        >
          <ClientEditInputs data={data} />
        </ModalWithForm>
      )}
    </main>
  );
};

export default ClientDetails;