import Button from "../components/Button";
import Header from "../components/Header";
import Table from "../components/Table";
import FilterSearch from "../components/widgets/FilterSearch";
import { invitationTitles, invtationDetails } from "../utils/constants";

const Invitations = () => {
  return (
    <main className="w-full">
      <Header
        title="invitations"
        description="Invite a new user to access the platform"
        Button={
          <Button
            title="Invite user"
            className="bg-[#16A34A] text-white rounded-md border-none hover:bg-[#1d7d40] shadow-sm"
          />
        }
      />

      <section className="pt-5">
        <FilterSearch />
      </section>

      <section>
        <Table tableTitles={invitationTitles} tableDetails={invtationDetails} />
      </section>
    </main>
  );
};

export default Invitations;
