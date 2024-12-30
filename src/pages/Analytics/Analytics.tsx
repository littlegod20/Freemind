import Header from "@/components/Header";
import StatisticsBox from "./components/StatisticsBox";
import { analyticsTableDetails, analyticsTableTitles, analyticsTabs, statisticsData } from "./constants";
import CommonTab from "@/components/widgets/CommonTab";
import { useState } from "react";
import SessionsTableHeader from "./components/SessionsTableHeader";
import CommonTabChild from "@/components/CommonTabChild";
import Table from "@/components/Table";
import { TableDemo } from "@/components/dummyTable";

const Analytics = () => {
  const [childIndex, setChildIndex] = useState(0);
  const [tabData, setTabData] = useState(analyticsTabs);
  // const [showModal, setShowModal] = useState(false);

  // const { onClose, close } = useAction();

  const handleAnalyticsTab = (tabLabel: string, indexChild: number) => {
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

  return (
    <main>
      <Header
        title="Analytics"
        description=" Monitor key metrics and insights as they happen"
      />

      <section className="pt-8">
        <StatisticsBox data={statisticsData.data} />
      </section>

      <section className="mt-8 pt-6 px-4 border rounded-lg shadow-inner">
        <SessionsTableHeader />

        <div className="mt-8 bg-green-500">
          <CommonTab
            tabData={tabData}
            onClickTab={handleAnalyticsTab}
            tabTitleStyle={"justify-between bg-blue-400"}
          >
            <CommonTabChild
              data={
                <TableDemo/>
              }
              tabNumber={0}
              childIndex={childIndex}
            >
              <p className="text-black z-50">hello</p>
              {/* <Table tableDetails={analyticsTableDetails} tableTitles={analyticsTableTitles} moreOptions={[{label:'something'}]} /> */}
            </CommonTabChild>
          </CommonTab>
        </div>
      </section>
    </main>
  );
};

export default Analytics;
