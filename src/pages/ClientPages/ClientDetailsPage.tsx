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
import { clientTabs } from "./clientData";
import { useAction } from "@/hooks/useAction";
import ModalWithForm from "@/components/widgets/ModalWithForm";
import ClientEditInputs from "./components/ClientEditInputs";
import Inputs from "@/components/Inputs";
import { Calendar, Edit, Trash2 } from "lucide-react";

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

const ClientDetailsPage = () => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState<ClientDetailsTypes | null>(null);
  const [childIndex, setChildIndex] = useState(0);
  const [tabData, setTabData] = useState(clientTabs);
  const [showModal, setShowModal] = useState(false);

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
    // console.log("childIndex:", indexChild);
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
            <CommonTabChild
              tabNumber={0}
              childIndex={childIndex}
              data={[
                "Inflamatory and fibrotic indications",
                "ALS (Amyotrophic Lateral Sclerosis)",
                "Neurotherapeutic Agent Characterization",
                "Innovation Grants to Nurture Initial Translational Efforts (IGNITE)",
              ]}
              moreOptions={[
                {
                  label: "Remove project",
                  action: () => console.log("deleted"),
                  Icon: Trash2,
                },
              ]}
              staticData={[
                {
                  title: "Projects",
                  buttonName: "Add project",
                  modalDetails: {
                    title: "Add project",
                    description:
                      "Select the project you want to add for this client",
                    buttonTitles: [
                      {
                        label: "Cancel",
                        action: () => setShowModal(!showModal),
                      },
                      {
                        label: "Add project",
                        action: () => console.log("add project"),
                      },
                    ],
                  },
                },
              ]}
              showModal={showModal}
              setShowModal={setShowModal}
            >
              <Inputs
                type="select"
                data={[
                  {
                    label: "Select project",
                    placeholder: "Select",
                    options: ["project 1", "project 2"],
                  },
                ]}
              />
            </CommonTabChild>

            <CommonTabChild
              tabNumber={1}
              childIndex={childIndex}
              data={[
                {
                  name: "Me",
                  role: "General user",
                  appDate: "Application date",
                  appStatus: "Application status",
                },
              ]}
              moreOptions={[
                {
                  label: "Edit application",
                  action: () => console.log("edit"),
                  Icon: Edit,
                },
                {
                  label: "Delete application",
                  action: () => console.log("deleted"),
                  Icon: Trash2,
                },
              ]}
              staticData={[
                {
                  title: "Applications",
                  buttonName: "Add application",
                  modalDetails: {
                    title: "Add application",
                    description: "Complete the information below to proceed",
                    buttonTitles: [
                      {
                        label: "Cancel",
                        action: () => setShowModal(!showModal),
                      },
                      {
                        label: "Add application",
                        action: () => console.log("add application"),
                      },
                    ],
                  },
                },
              ]}
              showModal={showModal}
              setShowModal={setShowModal}
            >
              <Inputs
                data={[
                  { label: "Applied for", placeholder: "Enter grant name" },
                  {
                    label: "Applied at",
                    placeholder: "Enter date",
                    Icon: Calendar,
                  },
                ]}
              />
              <Inputs
                data={[
                  {
                    label: "Application status",
                    placeholder: "Select",
                    options: ["status1", "status2"],
                  },
                ]}
                type="select"
              />
            </CommonTabChild>

            <CommonTabChild
              tabNumber={2}
              childIndex={childIndex}
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
              staticData={[
                {
                  title: "Team",
                  buttonName: "Add a team member",
                  modalDetails: {
                    title: "Add team member",
                    description:
                      "Select team member(s) you want to add for this client",
                    buttonTitles: [
                      {
                        label: "Cancel",
                        action: () => setShowModal(!showModal),
                      },
                      {
                        label: "Add team member",
                        action: () => console.log("add team"),
                      },
                    ],
                  },
                },
              ]}
              moreOptions={[
                {
                  label: "Remove team member",
                  action: () => console.log("removed"),
                  Icon: Trash2,
                },
              ]}
              showModal={showModal}
              setShowModal={setShowModal}
            >
              <Inputs
                data={[
                  {
                    label: "Select team member",
                    placeholder: "Select",
                    options: ["member1", "member2"],
                  },
                ]}
              />
            </CommonTabChild>
          </CommonTab>
        </section>
      </div>

      {close && (
        <ModalWithForm
          title="Edit client"
          onCancel={onClose}
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

export default ClientDetailsPage;
