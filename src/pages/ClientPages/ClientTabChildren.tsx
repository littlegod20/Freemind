import CommonTabChild from "@/components/CommonTabChild";
import ClientChildContent from "./ClientChildContent";
import Inputs from "@/components/Inputs";
import { Calendar, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

const ClientTabChildren = ({ childIndex }: { childIndex: number }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <CommonTabChild
        tabNumber={0}
        childIndex={childIndex}
        modalChildren={
          <Inputs
            type="select"
            data={[
              {
                label: "Select project",
                placeholder: "Select",
                options: ["project 1", "project 2"],
                type:'select'
              },
            ]}
          />
        }
        staticData={[
          {
            title: "Projects",
            buttonName: "Add project",
            modalDetails: {
              title: "Add project",
              description: "Select the project you want to add for this client",
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
        <ClientChildContent
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
        />
      </CommonTabChild>

      <CommonTabChild
        tabNumber={1}
        childIndex={childIndex}
        modalChildren={
          <>
            <Inputs
              data={[
                { label: "Applied for", placeholder: "Enter grant name" , type:'text'},
                {
                  label: "Applied at",
                  placeholder: "Enter date",
                  Icon: Calendar,
                  type:'date'
                },
              ]}
            />
            <Inputs
              data={[
                {
                  label: "Application status",
                  placeholder: "Select",
                  options: ["status1", "status2"],
                  type:'select'
                },
              ]}
              type="select"
            />
          </>
        }
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
        <ClientChildContent
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
        />
      </CommonTabChild>

      <CommonTabChild
        tabNumber={2}
        childIndex={childIndex}
        modalChildren={
          <Inputs
            data={[
              {
                label: "Select team member",
                placeholder: "Select",
                options: ["member1", "member2"],
                type:'select'
              },
            ]}
          />
        }
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
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <ClientChildContent
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
          moreOptions={[
            {
              label: "Remove team member",
              action: () => console.log("removed"),
              Icon: Trash2,
            },
          ]}
          border={false}
        />
      </CommonTabChild>
    </>
  );
};

export default ClientTabChildren;
