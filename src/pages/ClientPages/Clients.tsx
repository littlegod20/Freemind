import { Button } from "@/components/ui/button";
import Header from "../../components/Header";
import Table from "../../components/Table";
import FilterParent from "../../components/widgets/FilterParent";
import { data } from "../../utils/constants";
import { clientTableHeaders, moreClientOptions } from "./clientData";
import { useAction } from "@/hooks/useAction";
import ModalWithForm from "@/components/widgets/ModalWithForm";
import ClientEditInputs from "./components/ClientEditInputs";
import { useEffect, useState } from "react";
import { ClientDetailsTypes } from "./clientTypes";

const Clients = () => {
  const { onClose, close } = useAction();

  const [details, setDetails] = useState<ClientDetailsTypes[] | object[]>([{}]);

  const handleSubmitClient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Client submitted");
  };

  // (detail: ClientDetailsTypes) => {
  //   setDetails((prev) => (prev ? [...prev, detail] : [detail]));
  // };

  useEffect(() => {
    console.log("Parent Details:", details);
  }, [details]);

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
          tableDetails={details}
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
          submitForm={handleSubmitClient}
        >
          <ClientEditInputs data={data} onSubmit={() => handleSubmitClient} />
        </ModalWithForm>
      )}
    </main>
  );
};

export default Clients;
