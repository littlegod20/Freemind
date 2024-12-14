import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Table from "../components/Table";
import FilterSearch from "../components/widgets/FilterSearch";
import {
  invitationTitles,
  invtationDetails,
  moreInviteOptions,
} from "../utils/constants";

const Invitations = () => {
  return (
    <main className="w-full">
      <Header
        title="invitations"
        description="Invite a new user to access the platform"
        Button={
          <Button
            title="Invite user"
            className="bg-green-active text-white rounded-md border-none hover:bg-[#24b057] "
          >
            Invite user
          </Button>
        }
      />

      <section className="pt-5">
        <FilterSearch />
      </section>

      <section className="pt-10">
        <Table
          tableTitles={invitationTitles}
          tableDetails={invtationDetails}
          moreOptions={moreInviteOptions}
        />
      </section>
    </main>
  );
};

export default Invitations;
