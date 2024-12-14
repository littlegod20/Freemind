import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Table from "../components/Table";
import FilterParent from "../components/widgets/FilterParent";
import { clientDetails, clientTitles, moreClientOptions } from "../utils/constants";



const Clients = () => {
  return (
    <main>
      <Header
        title="clients"
        description="Manage all clients you have invited to the platform"
        Button={
          <Button
            title="New client"
            className="bg-green-active text-white rounded-md border-none shadow-sm hover:bg-[#24b057]"
          >
            New client
          </Button>
        }
      />

      <section className="pt-5">
        <FilterParent />
      </section>

      <section className="pt-10">
        <Table tableTitles={clientTitles} tableDetails={clientDetails} moreOptions={moreClientOptions} />
      </section>
    </main>
  );
};

export default Clients;
