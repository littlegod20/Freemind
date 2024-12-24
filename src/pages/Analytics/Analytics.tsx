import Header from "@/components/Header";
import StatisticsBox from "./components/StatisticsBox";
import statisticsData from "./constants";

const Analytics = () => {
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
        <header className="font-bold text-xl">
          Total sessions / user
        </header>
      </section>
    </main>
  );
};

export default Analytics;
