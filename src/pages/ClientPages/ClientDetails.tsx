import CommonTabChild from "@/components/CommonTabChild";
import Details from "@/components/Details";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import CommonTab from "@/components/widgets/CommonTab";
import EditContainer from "@/components/widgets/EditContainer";
import { clientDetailStatics } from "@/utils/constants";
import { ClientDetailsTypes, LabelTypes } from "@/utils/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const clientTabs: LabelTypes[] = [
  {
    label: "Tab1",
    active: true,
    title: "Projects",
    buttonName: "Add project",
    child: "ww",
  },
  {
    label: "Tab2",
    active: false,
    title: "Applications",
    buttonName: "Add application",
  },
  {
    label: "Tab3",
    active: false,
    title: "Team",
    buttonName: "Add team member",
  },
];

const ClientDetails = () => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState<ClientDetailsTypes | null>(null);

  const [childIndex, setChildIndex] = useState(0);
  const [tabData, setTabData] = useState(clientTabs);

  const handleClientTab = (tabLabel: string, indexChild: number) => {
    setTabData((prev) =>
      prev.map((item) =>
        item.label === tabLabel
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
    setChildIndex(indexChild);
    // console.log("tabData:", tabData);
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
    <main className="space-y-8">
      <Header title="Client Details" description="" back={true} />
      <div className="flex flex-col md:flex-row gap-10">
        <section className="space-y-5 md:w-1/2">
          <EditContainer
            isUser={true}
            title="Company name"
            Button={<Button>Edit client details</Button>}
          />
          <Details
            statics={clientDetailStatics}
            details={userDetail}
            slice1={0}
            slice2={2}
          />
          <Details
            statics={clientDetailStatics}
            details={userDetail}
            slice1={2}
            slice2={5}
          />

          <Details
            statics={clientDetailStatics}
            details={userDetail}
            slice1={5}
            slice2={6}
          />
          <Details
            statics={clientDetailStatics}
            details={userDetail}
            slice1={6}
            modified={true}
          />
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
        <section className="md:w-1/2 border-l-[1px]">
          <CommonTab
            tabData={tabData}
            onClickTab={handleClientTab}
          >
            <CommonTabChild tabNumber={0} childIndex={childIndex}>
              <p>Tab 0</p>
            </CommonTabChild>
            <CommonTabChild tabNumber={1} childIndex={childIndex}>
              <p>Tab 1</p>
            </CommonTabChild>
          </CommonTab>
        </section>
      </div>
    </main>
  );
};

export default ClientDetails;
