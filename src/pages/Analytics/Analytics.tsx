import Header from "@/components/Header";
import StatisticsBox from "./components/StatisticsBox";
import {
  analyticsSessionsDetails,
  analyticsSessionsTitles,
  analyticsTabs,
  numOfCallsforServiceDets,
  numOfCallsforServiceTitles,
  statisticsData,
} from "./constants";
import CommonTab from "@/components/widgets/CommonTab";
import { useState } from "react";
import CommonTabChild from "@/components/CommonTabChild";
import Table from "@/components/Table";
import ContainerHeader from "./components/ContainerHeader";
import Inputs from "@/components/Inputs";
import FilterByCalendar from "@/components/widgets/FilterByCalendar";

const Analytics = () => {
  const [childIndex, setChildIndex] = useState(0);
  const [tabData, setTabData] = useState(analyticsTabs);

  const handleAnalyticsTab = (tabLabel: string, indexChild: number) => {
    setTabData((prev) =>
      prev.map((item) =>
        item.label === tabLabel
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
    setChildIndex(indexChild);
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

      <section className="mt-8 border rounded-lg shadow-inner">
        <ContainerHeader title="Total sessions / user">
          <Inputs
            data={[
              {
                options: [
                  "All users",
                  ...analyticsSessionsDetails
                    .map((item) => item.name)
                    .filter((name): name is string => name !== undefined),
                ],
              },
            ]}
            type="select"
            className="w-44 font-normal"
            defaultSelect={false}
          />
        </ContainerHeader>

        <div className="">
          <CommonTab
            tabData={tabData}
            onClickTab={handleAnalyticsTab}
            tabTitleStyle={"justify-between bg-blue-400"}
            childrenClassName="px-0 py-0"
          >
            <CommonTabChild tabNumber={0} childIndex={childIndex}>
              <Table
                tableTitles={analyticsSessionsTitles}
                tableDetails={analyticsSessionsDetails}
                titlesClassName="w-1/2"
                detailsClassName="w-1/2"
                overAllContainerClassName="rounded-b-lg"
                tableClassName="rounded-none border-b-[1px]"
                pagination={true}
              />
            </CommonTabChild>
          </CommonTab>
        </div>
      </section>

      <section className="mt-8 border rounded-lg shadow-inner">
        <ContainerHeader title="Num of calls for service breakdown / user">
          <FilterByCalendar />
        </ContainerHeader>
        <Table
          tableTitles={numOfCallsforServiceTitles}
          tableDetails={numOfCallsforServiceDets}
          titlesClassName="w-1/2"
          detailsClassName="w-1/2"
          overAllContainerClassName="rounded-b-lg"
          tableClassName="rounded-none border-b-[1px]"
          pagination={true}
        />
      </section>
    </main>
  );
};

export default Analytics;
