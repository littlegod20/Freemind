import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Table from "../components/Table";
import FilterParent from "../components/widgets/FilterParent";
import {
  clientDetails,
  clientTitles,
  data,
  moreClientOptions,
} from "../utils/constants";
import { useAction } from "@/hooks/useAction";
import ModalWithForm from "@/components/widgets/ModalWithForm";
import Inputs from "@/components/Inputs";

const Clients = () => {
  const { onClose, close } = useAction();
  return (
    <main>
      <Header
        title="clients"
        description="Manage all clients you have invited to the platform"
        Button={
          <Button
            title="New client"
            className="bg-green-active text-white rounded-md border-none shadow-sm hover:bg-[#24b057]"
            onClick={onClose}
          >
            New client
          </Button>
        }
      />

      <section className="pt-5">
        <FilterParent
          data={[
            {
              label: "Role",
              placeholder: "Choose a role",
              options: ["General User", "Strategist", "Consultant"],
            },
          ]}
        />
      </section>

      <section className="pt-10">
        <Table
          tableTitles={clientTitles}
          tableDetails={clientDetails}
          moreOptions={moreClientOptions}
        />
      </section>

      {close && (
        <ModalWithForm
          title="Create new client"
          description="An invitation will be sent to this email address with a link to access the client portal"
          buttonTitles={[{ label: "Cancel", action: onClose }, { label: "Send Invite" }]}
          cancelButton={true}
        >
          <Inputs data={data} slice1={5} slice2={8} />

          <div className="flex justify-evenly items-center gap-2 pt-6">
            <div className="h-[1px] flex-grow border"></div>
            <p className="text-xs text-slate-500 text-center">
              Point of contact
            </p>
            <div className="h-[1px] flex-grow border"></div>
          </div>

          <Inputs data={data} slice1={0} slice2={2} layout="row" />
          <Inputs
            data={[{ label: "Email", placeholder: "Enter email address" }]}
          />
        </ModalWithForm>
      )}
    </main>
  );
};

export default Clients;
