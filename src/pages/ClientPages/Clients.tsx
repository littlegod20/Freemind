import { Button } from "@/components/ui/button";
import Header from "../../components/Header";
import Table from "../../components/Table";
import FilterParent from "../../components/widgets/FilterParent";
import { data } from "../../utils/constants";
import {
  clientTableHeaders,
  clientTableValues,
  moreClientOptions,
} from "./clientData";
import { useAction } from "@/hooks/useAction";
import ModalWithForm from "@/components/widgets/ModalWithForm";
import ClientEditInputs from "./components/ClientEditInputs";

const Clients = () => {
  const { onClose, close } = useAction();
  return (
    <main>
      <Header
        title="clients"
        description="Manage all clients you have invited to the platform"
        Button={<Button onClick={onClose}>New client</Button>}
      />

      <section className="pt-5">
        <FilterParent
          filterOptions={[
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
          tableTitles={clientTableHeaders}
          tableDetails={clientTableValues}
          moreOptions={moreClientOptions}
        />
      </section>

      {close && (
        <ModalWithForm
          title="Create new client"
          description="An invitation will be sent to this email address with a link to access the client portal"
          buttonTitles={[
            { label: "Cancel", action: onClose },
            { label: "Send Invite" },
          ]}
          onCancel={onClose}
        >
          <ClientEditInputs data={data} />
        </ModalWithForm>
      )}
    </main>
  );
};

export default Clients;
