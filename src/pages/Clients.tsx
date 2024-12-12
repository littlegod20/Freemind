import Button from "../components/Button";
import Header from "../components/Header";
import Table from "../components/Table";
import FilterParent from "../components/widgets/FilterParent";
import { clientDetails, clientTitles } from "../utils/constants";

const Clients = () => {
  return (
    <main>
      <Header
        title="clients"
        description="Manage all clients you have invited to the platform"
        Button={
          <Button
            title="New client"
            className="bg-[#16a34a] text-white rounded-md border-none shadow-sm hover:bg-[#24b057]"
          />
        }
      />

      <section className="pt-5">
        <FilterParent />
      </section>

      <section className="pt-10">
        <Table tableTitles={clientTitles} tableDetails={clientDetails} />
      </section>
    </main>
  );
};

export default Clients;
